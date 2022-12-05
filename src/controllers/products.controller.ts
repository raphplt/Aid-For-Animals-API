// Importing external variables and functions
import { Request, Response } from 'express';
import Product from '../database/models/Product';
import { createProduct, deleteProduct, updateProduct } from '../services/product.service';

// Controller to get all the elements of [products] table of the database
export async function getAll(req: Request, res: Response) {
  const findAll = await Product.findAll();
  if (findAll === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findAll));
  }
}

// Controller to get one element of [products] table by id of the database
export async function getById(req: Request, res: Response) {
  const findOne = await Product.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findOne));
  }
}

// Controller to add a product to [product] table.
export async function create(req: Request, res: Response) {
  if (req.body === null) {
    res.sendStatus(406);
  } else {
    createProduct(req);
    res.send('Ressource created successfully.');
  }
}

// Controller to update a product of [product] table by id
export async function updateOne(req: Request, res: Response) {
  const findOne = await Product.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(406);
  } else {
    updateProduct(req);
    res.send('Ressource updated successfully.');
  }
}

// Controller to delete a product of [product] table by id
export async function deleteOne(req: Request, res: Response) {
  const findOne = await Product.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(406);
  } else {
    deleteProduct(req);
    res.send('Resource deleted successfully.');
  }
}
