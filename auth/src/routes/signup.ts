import express, {Request, Response} from "express";
import { body } from "express-validator";

const router = express.Router();

router.post('/api/users/signup',(req: Request, res: Response) => {
    console.log("Hello again :)")
});

export { router as signUpRouter };