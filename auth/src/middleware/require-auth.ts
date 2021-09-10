import { Request, Response, NextFunction } from 'express';
import { NotAuthorisedError } from '../errors/not-authorised-error';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  // Ensure user is logged in
  if (!req.currentUser) {
    throw new NotAuthorisedError();
  }

  next();
};
