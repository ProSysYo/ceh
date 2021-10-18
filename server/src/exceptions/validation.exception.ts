import {HttpException, HttpStatus} from "@nestjs/common";

export class ValidationException extends HttpException {    
    errors;

    constructor(response) {
        super(response, HttpStatus.UNPROCESSABLE_ENTITY);
        this.errors = response
    }
}