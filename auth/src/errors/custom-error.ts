export abstract class CustomError extends Error {
    public abstract statusCode: number;

    constructor() {
        super();

        // Extending built in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    public abstract serialiseErrors(): {
        message: string,
        field?: string,
    }[]
}