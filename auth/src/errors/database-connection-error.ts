import {ValidationError} from "express-validator";

export class DatabaseConnectionError extends Error {
    public statusCode: number = 500;
    public reason: string = "Error connecting to database";

    constructor() {
        super();

        // Extending built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serialiseErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
}