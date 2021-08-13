import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  public statusCode: number = 400;
  public message: string;

  constructor(message: string) {
    super(message);

    this.message = message;

    // Extending built in class
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serialiseErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
