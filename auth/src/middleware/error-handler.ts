import {Request, Response, NextFunction} from "express";
import {RequestValidationError} from "../errors/request-validation-error";
import {DatabaseConnectionError} from "../errors/database-connection-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    // Handle validation error
    if(err instanceof RequestValidationError) {
        return res.status(err.statusCode).send({
            errors: err.serialiseErrors()
        })
    }

    // Handle database error
    else if (err instanceof  DatabaseConnectionError) {
        return res.status(err.statusCode).send({
            errors: err.serialiseErrors()
        })
    }

    res.status(400).send({
        errors: [
            {
                message: `Something went wrong: ${err.message}`
            }
        ]
    });
}