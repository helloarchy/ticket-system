import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  public statusCode: number = 404;

  constructor() {
    super("Route not found");

    // Extending built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serialiseErrors() {
    return [
      {
        message: "Not found",
      },
    ];
  }
}