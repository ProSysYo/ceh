const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken');

const { User } = require('../models/User')
const { Role } = require('../models/Role')

const FormatError = (errors) => {
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    const result = extractedErrors.reduce((acc, item) => {
        Object.keys(item).forEach(key => {
            if (acc.hasOwnProperty(key)) {
                acc[key] += ', ' + item[key];
            } else {
                acc[key] = item[key];
            }
        });
        return acc;
    }, {});

    return result
}

class authController {
    //эндпоинт регистрации: входные параметры: username, password
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {

                const formatedErrors = FormatError(errors)

                return res.status(400).json({ message: "Ошибка при регистрации", errors: formatedErrors })
            }
            //Деструктурирем username и password с объекта request
            //Если username и password нет в request можно вывести ошибку, что поля пустые, но в валидации мы указали
            //что эти поля не могут быть пустыми, поэтому нет в этом надобности, валидатор выведет ошибку
            const { username, password } = req.body

            //Проверяем существует ли такой пользователь в базе, если такой кандидат уже есть, то
            //выведем ошибку
            const candidate = await User.findOne({ username })

            if (candidate) {
                return res.status(409).json({ message: "Пользователь с таким именем уже существует" })
            }
            //Генерируем salt и хэш пароля
            const salt = bcrypt.genSaltSync(10)
            const hashPassword = bcrypt.hashSync(password, salt)

            //Получаем роль USER
            const userRole = await Role.findOne({ value: 'USER' })

            //Создаем нового пользователя, добавляем по умолчанию роль USER
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })

            //Сохраняем пользователя в базе
            await user.save()

            return res.json({ message: "Пользователь успешно зарегистрирован" })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Ошибка при регистрации', e })
        }
    }

    //эндпоинт авторизации, входные параметры: username, password
    async login(req, res) {
        try {
            //Валидируем с помощью express-validator
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const formatedErrors = FormatError(errors)

                return res.status(400).json({ message: 'Ошибка авторизации', errors: formatedErrors })
            }
            //Деструктурируем username и password
            const { username, password } = req.body

            //Ищем пользователя с таким username
            const user = await User.findOne({ username })

            //Если такого пользователя нет выводим ошибку
            if (!user) {
                return res.status(400).json({ message: `Пользователь ${username} не найден` })
            }

            //Сравниваем введенный пароль с паролем из базы
            const validPassword = bcrypt.compareSync(password, user.password)

            //Если пароли не совпадают, выводим ошибку
            if (!validPassword) {
                return res.status(400).json({ message: 'Введен неверный пароль' })
            }

            //Генерируем токен с помощью jsonwebtoken, время жизни 10 часов
            const token = jwt.sign({
                id: user._id,
                roles: user.roles
            }, config.get('secret'), { expiresIn: "10h" })

            //Возвращаем на клиент сгенерированный токен
            return res.json({
                message: 'Вы успешно зашли в систему',
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    roles: user.roles
                }
            })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Ошибка при входе в систему', e })
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({_id: req.user.id})
            
            const token = jwt.sign({
                id: user._id,
                roles: user.roles
            }, config.get('secret'), { expiresIn: "10h" })

            return res.json({
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    roles: user.roles
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Ошибка при авторизации"})
        }
    }

    //Эндпоинт получения всех пользователей. Доступ имеет только администратор
    async getUsers(req, res) {
        try {
            const users = await User.find({}).select('username')
            return res.json(users)
        } catch (e) {
            res.status(400).json({ message: 'Error in get users', e })
        }
    }
}

module.exports = new authController()