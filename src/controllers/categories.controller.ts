// Importing external variables and functions
import { Request, Response } from 'express';
import Category from '../database/models/Category';
import { createCategory, deleteCategory, updateCategory } from '../services/category.service';

// Get all elements
export async function getAll(req: Request, res: Response) {
  const findAll = await Category.findAll();
  if (findAll === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findAll));
  }
}

// Get one element
export async function getById(req: Request, res: Response) {
  const findOne = await Category.findOne({ where: { id: req.params.id } });
  if (findOne === null) {
    res.sendStatus(404);
  } else {
    res.send(JSON.stringify(findOne));
  }
}

// Create an element
export async function create(req : Request, res : Response) {
  if (req.body === null) {
    res.sendStatus(406);
  } else {
    createCategory(req);
    res.send('Category created successfully.');
  }
}

// Update an elemment
export async function updateOne(req : Request, res : Response) {
  const find = await Category.findOne({ where: { id: req.params.id } });
  if (find === null) {
    res.sendStatus(406);
  } else {
    updateCategory(req);
    res.send('Categorie updated successfully.');
  }
}

// Delete an element
export async function deleteOne(req : Request, res : Response) {
  const find = await Category.findOne({ where: { id: req.params.id } });
  if (find === null) {
    res.sendStatus(406);
  } else {
    deleteCategory(req);
    res.send('Resource deleted successfully.');
  }
}
