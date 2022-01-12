import {
	ArgumentMetadata,
	Injectable,
	PipeTransform,
	HttpException,
	HttpStatus,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
		const obj = plainToClass(metadata.metatype, value);
		const validateResult = await validate(obj);

		if (validateResult.length) {
			const errors = validateResult.reduce((combo, item) => {
				combo[item.property] = Object.values(item.constraints).join(', ');
				return combo;
			}, {});

			throw new HttpException(
				{
					message: 'Ошибка валидации',
					errors,
					statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
				},
				HttpStatus.UNPROCESSABLE_ENTITY
			);
		}
		return value;
	}
}
