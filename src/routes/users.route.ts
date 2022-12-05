// Importing external variables and functions
import {
  deleteOne, getAll, getById, updateOne,
} from '../controllers/users.controller';

const express = require('express');

// Router instantiation
const router = express.Router();

// Routes

// Get all elements of the ressource
router.get('/', getAll);

// Get one element by id
router.get('/:id', getById);

// Update an element of the ressource
router.put('/:id', updateOne);

// Delete an element of the resource
router.delete('/:id', deleteOne);

// Export the instance of the route
export default router;
