// Importing external variables and functions
import { Request } from 'express';
import Order from '../database/models/Order';

// Service to create a product of [Order] table
export const createOrder = async (req: Request) => {
  const createOne = await Order.create({
    dateOfPurchase: req.body.dateOfPurchase,
  });
  await createOne.save();
  return createOne;
};

// Service to update a product of [Order] table by id
export const updateOrder = async (req: Request) => {
  const findOne = await Order.findOne({ where: { id: req.params.id } });
  const update = await findOne.update({
    dateOfPurchase: req.body.dateOfPurchase,
  });
  await update.save();
  return update;
};

// Service to delete a product of [Order] table by id
export const deleteOrder = async (req: Request) => {
  const findOne = await Order.findOne({ where: { id: req.params.id } });
  const destroyOne = await findOne.destroy();
  await destroyOne.save();
  return destroyOne;
};
