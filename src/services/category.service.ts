// Importing external variables and functions
import { Request } from 'express';
import Category from '../database/models/Category';

// Service to create a product of [Category] table.
export const createCategory = async (req: Request) => {
  const createOne = await Category.create({
    name: req.body.name,
  });
  await createOne.save();
  return createOne;
};

// Service to update a product of [Category] table by id
export const updateCategory = async (req: Request) => {
  const findOne = await Category.findOne({ where: { id: req.params.id } });
  const update = await findOne.update({
    name: req.body.name,
  });
  await update.save();
  return update;
};

// Service to delete a product of [Category] table by id
export const deleteCategory = async (req: Request) => {
  const findOne = await Category.findOne({ where: { id: req.params.id } });
  const destroyOne = await findOne.destroy();
  await destroyOne.save();
  return destroyOne;
};
