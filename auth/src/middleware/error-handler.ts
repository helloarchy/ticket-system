import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handle validation error
  if (err instanceof CustomError) {
    console.log(err);
    return res.status(err.statusCode).send({
      errors: err.serialiseErrors(),
    });
  }

  res.status(400).send({
    errors: [
      {
        message: `Something went wrong: ${err.message}`,
      },
    ],
  });
};
