export abstract class CustomError extends Error {
  public abstract statusCode: number;

  constructor(message: string) {
    super(message);

    // Extending built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  public abstract serialiseErrors(): {
    message: string;
    field?: string;
  }[];
}
