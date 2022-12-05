// Importing external variables and functions
import { Request, Response } from 'express';
import cookie from 'cookie';
import User from '../database/models/User';
import { createUser, deleteUser, updateUser } from '../services/user.service';

require('dotenv').config();

const jwt = require('jsonwebtoken');

// Use of environment variables
export const accessTokenSecret = process.env.ACCESSTOKENSECRET;
export const refreshTokenSecret = process.env.REFRESHTOKENSECRET;
export const refreshTokens : any = [];

// Controller to get all the elements of [User] table of the database
export async function getAll(req: Request, res: Response) {
  const findAll = await User.findAll();
  if (findAll === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findAll));
  }
}

// Controller to get one element of [User] table by id of the database
export async function getById(req: Request, res: Response) {
  const findOne = await User.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findOne));
  }
}

// Controller to update a product of [User] table by id
export async function updateOne(req: Request, res: Response) {
  const findOne = await User.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(406);
  } else {
    updateUser(req);
    res.send('User updated succesfully.');
  }
}

// Controller to delete a product of [User] table by id
export async function deleteOne(req: Request, res: Response) {
  const findOne = await User.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(406);
  } else {
    deleteUser(req);
    res.send('Resource deleted successfully.');
  }
}

// Controller to register
export async function register(req: Request, res: Response) {
  const findUsername = await User.findOne({ where: { userName: req.body.userName } });
  if (req.body === null) {
    res.sendStatus(404);
  } if (findUsername !== null) {
    res.send('This username already exists. ');
  } else {
    createUser(req);
    res.send('Account created successfully!');
  }
}

// Controller to login
export async function login(req: Request, res: Response) {
  const { username, passWord } = req.body;
  const findUser = await User.findOne({ where: { userName: username } });
  if (findUser !== null) {
    const findPassword = await User.findOne({ where: { password: passWord } });
    if (findPassword !== null) {
      const accessToken = jwt.sign({ userName: User.userName, role: User.role }, accessTokenSecret, { expiresIn: '1h' });
      res.setHeader('Set-Cookie', cookie.serialize('auth', accessToken, {
        httpOnly: true, secure: false, sameSite: 'strict', maxAge: 3600, path: '/',
      }));
      res.json({ message: 'Welcome back' });
    } else {
      res.json({ message: 'Incorrect informations. Please retry' });
    }
  } else {
    res.json({ message: 'Incorrect informations. Please retry' });
  }
}
