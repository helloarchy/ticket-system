import {ValidationError} from "express-validator";

export class DatabaseConnectionError extends Error {
    public errors: ValidationError[]

    constructor(errors: ValidationError[]) {
        super();

        this.errors = errors;

        // Extending built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}