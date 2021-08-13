import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

// Convert scrypt to promise based for async/await
const scryptAsync = promisify(scrypt);

export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buffer = (await scryptAsync(salt, password, 64)) as Buffer;

    return `${buffer.toString("hex")}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(".");
    const buffer = (await scryptAsync(salt, suppliedPassword, 64)) as Buffer;

    return buffer.toString("hex") === hashedPassword;
  }
}
