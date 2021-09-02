import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  public statusCode = 500;
  public reason = 'Error connecting to database';

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
