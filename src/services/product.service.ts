// Importing external variables and functions
import { Request } from 'express';
import Product from '../database/models/Product';

// Service to create a product of [Product] table.
export const createProduct = async (req: Request) => {
  const createOne = await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
  });
  await createOne.save();
  return createOne;
};

// Service to update a product of [Product] table by id
export const updateProduct = async (req: Request) => {
  const findOne = await Product.findOne({ where: { id: req.params.id } });
  const update = await findOne.update({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
  });
  await update.save();
  return update;
};

// Service to delete a product of [Product] table by id
export const deleteProduct = async (req: Request) => {
  const findOne = await Product.findOne({ where: { id: req.params.id } });
  const destroyOne = await findOne.destroy();
  await destroyOne.save();
  return destroyOne;
};
