import {ValidationError} from "express-validator";

export class RequestValidationError extends Error {
    public statusCode: number = 400;
    public errors: ValidationError[]

    constructor(errors: ValidationError[]) {
        super();

        this.errors = errors;

        // Extending built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serialiseErrors() {
        return this.errors.map(err => {
            return {
                message: err.msg,
                field: err.param
            }
        })
    }
}