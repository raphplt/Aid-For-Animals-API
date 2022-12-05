// Importing external variables and functions
import { Request } from 'express';
import User from '../database/models/User';

// Service to create a product of [User] table.
export const createUser = async (req: Request) => {
  const createOne = await User.create({
    userName: req.body.userName,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    role: req.body.role,
  });
  await createOne.save();
  return createOne;
};

// Service to update a product of [User] table by id
export const updateUser = async (req: Request) => {
  const findOne = await User.findOne({ where: { id: req.params.id } });
  const update = await findOne.update({
    userName: req.body.userName,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    role: req.body.role,
  });
  await update.save();
  return update;
};

// Service to delete a product of [User] table by id
export const deleteUser = async (req: Request) => {
  const findOne = await User.findOne({ where: { id: req.params.id } });
  const destroyOne = await findOne.destroy();
  await destroyOne.save();
  return destroyOne;
};
