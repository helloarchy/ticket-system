import {ValidationError} from "express-validator";
import {CustomError} from "./custom-error";

export class RequestValidationError extends CustomError {
    public statusCode: number = 400;
    public errors: ValidationError[]

    constructor(errors: ValidationError[]) {
        super("Invalid request parameters");

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