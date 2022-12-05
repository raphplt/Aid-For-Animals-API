/* eslint-disable consistent-return */

// Importing external variables and functions
import { Request, Response } from 'express';
import { accessTokenSecret } from '../controllers/users.controller';

const jwt = require('jsonwebtoken');

// Authentication function
export default function authenticateJWT(req: Request, res: Response, next: Function) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Split the value and separate the token
    const token = authHeader.split(' ')[1];
    jwt.verify(token, accessTokenSecret, (err: any, user: any) => {
      if (err) {
        // Token isn't valid
        return res.sendStatus(403);
      }
      // Attach user object to request
      req.body.user = user;
      next();
    });
  } else {
    // No token is provided
    res.sendStatus(401);
  }
}
