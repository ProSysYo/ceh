import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exceptions/validation.exception";


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const obj = plainToClass(metadata.metatype, value);       
        
        const validateResult = await validate(obj);
        
        let errors = {}

        if (validateResult.length) {

            let errors = validateResult.reduce((combo, item) => {
                combo[item.property] = Object.values(item.constraints).join(', ')
                return combo;
            }, {});

            // validateResult.map(err => {messages.push({ [err.property]: Object.values(err.constraints).join(', ') })})
            throw new ValidationException(errors)
        }
        return value;
    }

}