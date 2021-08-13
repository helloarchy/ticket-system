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

  static compare(storedPassword: string, suppliedPassword: string) {}
}
