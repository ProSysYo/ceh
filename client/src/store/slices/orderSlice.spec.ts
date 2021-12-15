import reducer, { orderActions } from './orderSlice'
import { OrderSate } from './orderSlice';

const decorationsAll = [
        { _id: "1", value: "нет", name: "нет", type: "нет", variety: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание", variety: "примечание" },
        { _id: "3", value: "Д1", name: "Д1", type: "металл", variety: "Д" },
        { _id: "4", value: "Д2", name: "Д2", type: "металл", variety: "Д" },
        { _id: "5", value: "ДН1", name: "ДН1", type: "металл", variety: "ДН" },
        { _id: "6", value: "ДН2", name: "ДН2", type: "металл", variety: "ДН" },
        { _id: "7", value: "ДР1", name: "ДР1", type: "металл", variety: "ДР" },
        { _id: "8", value: "ДР2", name: "ДР2", type: "металл", variety: "ДР" },
        { _id: "9", value: "Н1", name: "Н1", type: "металл", variety: "Н" },
        { _id: "10", value: "Н2", name: "Н2", type: "металл", variety: "Н" },
        { _id: "11", value: "Ф1", name: "Ф1", type: "металл", variety: "Ф" },
        { _id: "12", value: "Ф2", name: "Ф2", type: "металл", variety: "Ф" },
        { _id: "13", value: "ФЛ-1", name: "ФЛ-1", type: "панель", variety: "фрезеровка" },
        { _id: "14", value: "ФЛЗ-1", name: "ФЛЗ-1", type: "панель", variety: "фрезеровка" }   
]

const initialState: OrderSate = {
    orders: [],
    customers: [
        { _id: "1", value: "D001", name: "Бункер" },
        { _id: "2", value: "D002", name: "Волга-Бункер" },
    ],
    parties: [
        { _id: "1", value: "заказная", name: "заказная" },
        { _id: "2", value: "партия", name: "партия" },
    ],
    models: [
        { _id: "1", value: "ММ", name: "ММ", contours: [1], doorThicks: [60], typeOutside: "металл", typeInside: "металл", isTermo: false },
        { _id: "2", value: "МП", name: "МП", contours: [1, 2], doorThicks: [60, 70], typeOutside: "металл", typeInside: "панель", isTermo: false },
        { _id: "3", value: "ПП", name: "ПП", contours: [1, 2, 3], doorThicks: [60, 70, 80], typeOutside: "панель", typeInside: "панель", isTermo: false },
        { _id: "4", value: "МП_Пена", name: "МП_Пена", contours: [3], doorThicks: [60, 70, 80, 90, 100], typeOutside: "металл", typeInside: "панель", isTermo: false },
        { _id: "5", value: "ПП_Пена", name: "ПП_Пена", contours: [2, 3], doorThicks: [90, 100], typeOutside: "панель", typeInside: "панель", isTermo: false },
        { _id: "6", value: "МПТ", name: "МПТ", contours: [2, 3], doorThicks: [90, 100], typeOutside: "металл", typeInside: "панель", isTermo: true },
        { _id: "7", value: "ППТ", name: "ППТ", contours: [2, 3], doorThicks: [90, 100], typeOutside: "панель", typeInside: "панель", isTermo: true },
    ],
    contours: [],
    doorThicks: [],
    modelBoxes: [
        { _id: "1", value: "открытая", name: "открытая" },
        { _id: "2", value: "закрытая", name: "закрытая" },
        { _id: "3", value: "закрытая утепленная", name: "закрытая утепленная" },
    ],
    openingTypes: [
        { _id: "1", value: "наружного", name: "наружного" },
        { _id: "2", value: "внутреннего", name: "внутреннего" },
    ],
    baseLocks: [
        { _id: "1", value: "О.С.", name: "О.С.", installation: "основной", type: "сувальда", isBolt: false },
        { _id: "2", value: "О.С.В.", name: "О.С.В.", installation: "основной", type: "сувальда", isBolt: true },
        { _id: "3", value: "О.Ц.", name: "О.Ц.", installation: "основной", type: "цилиндр", isBolt: false },
        { _id: "4", value: "О.Ц.В.", name: "О.Ц.В.", installation: "основной", type: "цилиндр", isBolt: true },
        { _id: "5", value: "О.Д.", name: "О.Д.", installation: "основной", type: "двухсистемный", isBolt: false },
        { _id: "6", value: "О.Д.В.", name: "О.Д.В.", installation: "основной", type: "двухсистемный", isBolt: true },
        { _id: "7", value: "О.Д.", name: "О.Д.", installation: "основной", type: "двухсистемный", isBolt: false },
        { _id: "8", value: "О.Д.В.", name: "О.Д.В.", installation: "основной", type: "двухсистемный", isBolt: true },
        { _id: "9", value: "О.Др.", name: "О.Др.", installation: "основной", type: "другое", isBolt: false },
        { _id: "10", value: "О.Др.В.", name: "О.Др.В.", installation: "основной", type: "другое", isBolt: true },
        { _id: "13", value: "нет", name: "нет", installation: "нет", type: "нет", isBolt: false },
        { _id: "14", value: "см. прим.", name: "см. прим.", installation: "примечание", type: "примечание", isBolt: true },
    ],
    optionalLocks: [
        { _id: "11", value: "доп цил", name: "доп цил", installation: "дополнительный", type: "цилиндр", isBolt: false },
        { _id: "12", value: "доп сув", name: "доп сув", installation: "дополнительный", type: "сувальда", isBolt: false },
        { _id: "13", value: "нет", name: "нет", installation: "нет", type: "нет", isBolt: false },
        { _id: "14", value: "см. прим.", name: "см. прим.", installation: "примечание", type: "примечание", isBolt: true },
    ],
    spinners: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "вертушок 1", name: "вертушок 1" },
        { _id: "4", value: "вертушок 2", name: "вертушок 2" },
    ],
    cylinders: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "Цилиндр 1", name: "Цилиндр 1" },
        { _id: "3", value: "Цилиндр 2", name: "Цилиндр 2" },
    ],
    covers: [
        { _id: "1", value: "нет", name: "нет", type: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание" },
        { _id: "3", value: "накладка 1 цил", name: "накладка 1 цил", type: "цилиндр" },
        { _id: "4", value: "накладка 2 сув", name: "накладка 2 сув", type: "сувальда" },
    ],
    baseCovers: [],
    baseCovers2: [],
    optionalCovers: [],
    eyes: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "Armadillo", name: "Armadillo" },
        { _id: "4", value: "Fuaro", name: "Fuaro" },
    ],
    eyeLocations: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "3", value: "центр", name: "центр" },
        { _id: "4", value: "сбоку", name: "сбоку" },
    ],
    handles: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "Ручка 26", name: "Ручка 26" },
        { _id: "4", value: "Ручка Пирамида", name: "Ручка Пирамида" },
    ],
    typeDecorations: [
        { _id: "1", value: "нет", name: "нет", type: "нет", variety: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание", variety: "примечание" },
        { _id: "3", value: "Давление на полотне", name: "Давление на полотне", type: "металл", variety: "Д" },
        { _id: "10", value: "Давление на полотне с эл. нерж. стали", name: "Давление на полотне с эл. нерж. стали", type: "металл", variety: "ДН" },
        { _id: "11", value: "Давление и резка на полотне с эл. нерж. стали", name: "Давление и резка на полотне с эл. нерж. стали", type: "металл", variety: "ДР" },
        { _id: "12", value: "Накладные элементы на металле", name: "Накладные элементы на металле", type: "металл", variety: "Н" },
        { _id: "13", value: "Металлофиленки на металле", name: "Металлофиленки на металле", type: "металл", variety: "Ф" },
        { _id: "6", value: "МДФ 16мм лам. фр.", name: "МДФ 16мм лам. фр.", type: "панель", variety: "фрезеровка" },
        { _id: "7", value: "МДФ 16мм лам. б/фр.", name: "МДФ 16мм лам. б/фр.", type: "панель", variety: "нет" },
        { _id: "8", value: "МДФ 16мм лам. фр.с зеркалом", name: "МДФ 16мм лам. фр.с зеркалом", type: "панель", variety: "нет" },
        { _id: "9", value: "под панель 16мм", name: "под панель 16мм", type: "нет", variety: "нет" },
    ],
    typeDecorationsOutside: [],
    typeDecorationsInside: [],
    decorations: decorationsAll,
    decorationsOutside: [],
    wraps: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "ALMON 2", name: "ALMON 2" },
        { _id: "4", value: "белая скала", name: "белая скала" },
        { _id: "5", value: "венге глянец", name: "венге глянец" },
    ],
    patinas: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "золото", name: "золото" },
        { _id: "4", value: "серебро", name: "серебро" },
    ],
    decorationsInside: [],
    typeWindows: [
        { _id: "1", value: "нет", name: "нет", type: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание" },
        { _id: "3", value: "стеклопакет", name: "стеклопакет", type: "С" },
        { _id: "4", value: "ковка + стеклопакет", name: "ковка + стеклопакет", type: "КС" },
    ],
    windows: [
        { _id: "1", value: "нет", name: "нет", type: "нет", height: 0, width: 0, tTermo: 0, t60: 0, t70: 0, t80: 0, t90: 0, t100: 0 },
        { _id: "2", value: "см. прим.", name: "см. прим.", type: "примечание", height: 0, width: 0, tTermo: 0, t60: 0, t70: 0, t80: 0, t90: 0, t100: 0 },
        { _id: "3", value: "С1", name: "С1", type: "С", height: 1415, width: 260, tTermo: 81, t60: 42, t70: 52, t80: 62, t90: 72, t100: 81 },
        { _id: "4", value: "С2", name: "С2", type: "С", height: 1500, width: 260, tTermo: 81, t60: 32, t70: 32, t80: 32, t90: 32, t100: 32 },
        { _id: "5", value: "КС1", name: "КС1", type: "КС", height: 1415, width: 260, tTermo: 81, t60: 42, t70: 52, t80: 62, t90: 72, t100: 81 },
        { _id: "6", value: "КС2", name: "КС2", type: "КС", height: 1500, width: 260, tTermo: 81, t60: 32, t70: 32, t80: 32, t90: 32, t100: 32 },
    ],
    currentWindows: [],
    colorTints: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "коричневое стекло", name: "коричневое стекло" },
        { _id: "4", value: "серебро", name: "серебро" },
    ],
    colorForges: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "в цвет двери", name: "в цвет двери" },
        { _id: "4", value: "черный муар", name: "черный муар" },
    ],
    patinaForges: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "см. прим.", name: "см. прим." },
        { _id: "3", value: "бронза", name: "бронза" },
        { _id: "4", value: "золото", name: "золото" },
    ],
    locationHinges: [
        { _id: "1", value: "левые", name: "левые" },
        { _id: "2", value: "правые", name: "правые" },
    ],
    hingeCounts: [
        { _id: "1", value: 2, name: 2 },
        { _id: "2", value: 3, name: 3 },
    ],
    typeHinges: [
        { _id: "1", value: "капелька", name: "капелька" },
        { _id: "2", value: "на подшипнике", name: "на подшипнике" },
        { _id: "3", value: "см. прим.", name: "см. прим." },
    ],
    thickMetalLeafs: [
        { _id: "1", value: 1.0, name: 1.0 },
        { _id: "2", value: 1.2, name: 1.2 },
        { _id: "3", value: 1.4, name: 1.4 },
    ],
    thickMetalBoxes: [
        { _id: "1", value: 1.2, name: 1.2 },
        { _id: "2", value: 1.4, name: 1.4 },
    ],
    jambs: [
        { _id: "1", value: "стандартный", name: "стандартный", type: "все" },
        { _id: "2", value: "фигурный", name: "фигурный", type: "металл" },
        { _id: "3", value: "капитель", name: "капитель", type: "панель" },
    ],
    currentJambs: [],
    locationJambs: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "со стороны петель", name: "со стороны петель" },
        { _id: "3", value: "с противоп. стороны петель", name: "с противоп. стороны петель" },
    ],
    fittingColors: [
        { _id: "1", value: "нет", name: "нет" },
        { _id: "2", value: "хром", name: "хром" },
        { _id: "3", value: "бронза", name: "бронза" },
    ],

    isLoading: false,

    isLockSpinner: false,//Вертушок замка
    isBaseCylinder: false,
    isBaseCover: false,
    isBaseCover2: false,

    isOptionalCylinder: false,
    isOptionalCover: false,

    isWrapOutside: false,
    isWrapInside: false,
    isPatinaOutside: false,
    isPatinaInside: false,
    isColorForge: false,
    isPatinaForge: false,
    isJambWrap: false,
    isLocationJamb: false,

    validateErrors: {},

    order: {
        customer: "",
        number: "",
        numberCustomer: "",
        party: "",

        model: "",

        computedModel: "",

        contour: "",
        doorThick: "",
        height: "",
        width: "",
        modelBox: "",
        openingType: "",
        isDouble: false,
        widthDouble: 0,

        //Петли
        locationHinge: "",
        typeHinge: "",
        countHinge: "",

        //Основной замок
        baseLock: "",
        lockSpinner: "нет",
        lockSpinnerColor: "нет",
        baseCylinder: "нет",

        //Накладки основного замка
        baseCoverOutside: "нет",
        baseCoverColorOutside: "нет",
        baseCoverInside: "нет",
        baseCoverColorInside: "нет",

        //Накладки основного замка (если двухсистемный замок)
        baseCoverOutside2: "нет",
        baseCoverColorOutside2: "нет",
        baseCoverInside2: "нет",
        baseCoverColorInside2: "нет",

        //Дополнительный замок
        optionalLock: "",
        optionalCylinder: "нет",

        //Накладки дополнительного замка
        optionalCoverOutside: "нет",
        optionalCoverColorOutside: "нет",
        optionalCoverInside: "нет",
        optionalCoverColorInside: "нет",

        //Глазок
        eye: "",
        colorEye: "",
        eyeLocation: "",

        //Ручка
        handle: "",
        handleColor: "",

        //Вертушок двери(не замка)
        spinner: "",
        spinnerColor: "",

        typeDecorationOutside: "",
        decorationOutside: "",
        wrapOutside: "",
        patinaOutside: "",
        typeDecorationInside: "",
        decorationInside: "",
        wrapInside: "",
        patinaInside: "",
        typeWindow: "",
        doorWindow: "",
        colorTint: "",
        colorForge: "",
        patinaForge: "",
        heightWindow: "",
        widthWindow: "",
        thickWindow: "",
        countDoors: 0,
        costDoor: 0,
        note: "",
        thickMetalLeaf: 0,
        thickMetalBox: 0,
        jamb: "",
        jambWrap: "",
        locationJumb: "",

        isStainlessDoorStep: false,
        isStreetDoor: false,
        isEccentric: false,
        isBackSheet: false,
        isCloser: false,
        isEnhanceCloser: false,
        isTermoCable: false,
        isElectromagnet: false,
        isIllumination: false,
    }
}

describe('order slice', () => {
    it('set customer', () => {
        expect(reducer(initialState, orderActions.setCustomer("D001"))).toEqual({
            ...initialState,
            order: {...initialState.order, customer: "D001"}
        })
    })

    const stateMetalMetal = {
            ...initialState,
            typeDecorationsOutside: [...initialState.typeDecorations.filter(item => item.type === "металл" || item.type === "нет" || item.type === "примечание")],
            typeDecorationsInside: [...initialState.typeDecorations.filter(item => item.type === "металл" || item.type === "нет" || item.type === "примечание")],
            currentJambs:[...initialState.jambs.filter(item => item.type === "металл" || item.type === "все" )],
            contours: [1],
            doorThicks: [60],
            isJambWrap: false,
            isWrapOutside: false,
            isWrapInside: false,
            isPatinaOutside: false,
            isColorForge: false,
            isPatinaForge: false,
            order: {
                ...initialState.order, 
                model: "ММ",
                jamb: "",
                jambWrap: "нет",
                contour: "",
                decorationOutside: "",
                wrapOutside: "",
                patinaOutside: "",
                typeWindow: "",
                doorWindow: "",
                colorTint: "",
                colorForge: "",
                patinaForge: "",
                heightWindow: "",
                widthWindow: "",
                thickWindow: "",
            }
    }
    it('set model "ММ"', () => {
        expect(reducer(initialState, orderActions.setModel("ММ"))).toEqual(stateMetalMetal)
    })

    const statePress = {
        ...stateMetalMetal,
        isWrapOutside: false,
        isPatinaOutside: false,
        order: {
            ...stateMetalMetal.order,
            decorationsOutside:  [...stateMetalMetal.decorations.filter(item => item.variety === "Д" || item.variety === "примечание")],
            decorationOutside: "Давление на полотне",
            wrapOutside: "нет",
            patinaOutside: "нет"
        }
    }
    it('set decoration outside "Давление на полотне"', () => {
        expect(reducer(stateMetalMetal, orderActions.setDecorationInside("Давление на полотне"))).toEqual(statePress)
    })
})