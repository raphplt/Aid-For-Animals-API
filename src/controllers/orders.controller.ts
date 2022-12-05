// Importing external variables and functions
import { Request, Response } from 'express';
import Order from '../database/models/Order';
import { createOrder, deleteOrder, updateOrder } from '../services/order.service';

// Controller to get all the elements of [Order] table of the database
export async function getAll(req: Request, res: Response) {
  const findAll = await Order.findAll();
  if (findAll === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findAll));
  }
}

// Controller to get one element of [Order] table by id of the database
export async function getById(req: Request, res: Response) {
  const findOne = await Order.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findOne));
  }
}

// Controller to add a product to [Order] table.
export async function create(req: Request, res: Response) {
  if (req.body === null) {
    res.sendStatus(406);
  } else {
    createOrder(req);
    res.send('Order created successfully.');
  }
}

// Controller to update a product of [Order] table by id
export async function updateOne(req: Request, res: Response) {
  const findOne = await Order.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(406);
  } else {
    updateOrder(req);
    res.send('Order updated successfully.');
  }
}

// Controller to delete a product of [Order] table by id
export async function deleteOne(req: Request, res: Response) {
  const findOne = await Order.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(406);
  } else {
    deleteOrder(req);
    res.send('Resource deleted successfully.');
  }
}
