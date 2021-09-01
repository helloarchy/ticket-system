import { body, validationResult } from 'express-validator';
import express, { Request, Response } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';

import { validateRequest } from '../middleware/validate-request';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must provide a password'),
  ],
  validateRequest,
  (req: Request, res: Response) => {}
);

export { router as signInRouter };
