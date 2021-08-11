import {ValidationError} from "express-validator";

export class RequestValidationError extends Error {
    public errors: ValidationError[]

    constructor(errors: ValidationError[]) {
        super();

        this.errors = errors;

        // Extending built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}