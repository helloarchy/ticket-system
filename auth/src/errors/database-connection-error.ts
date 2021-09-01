import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  public statusCode: number = 500;
  public reason: string = 'Error connecting to database';

  constructor() {
    super('Error connection to database');

    // Extending built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serialiseErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
