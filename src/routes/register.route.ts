// Importing external variables and functions
import { register } from '../controllers/users.controller';

const express = require('express');

// Router instantiation
const router = express.Router();

// Routes

// Create an element of the ressource
router.post('/', register);

// Export the instance of the route
export default router;
