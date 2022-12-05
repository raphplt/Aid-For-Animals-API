// Importing external variables and functions
import sequelize from './instance';
import Category from './database/models/Category';
import Order from './database/models/Order';
import Product from './database/models/Product';
import User from './database/models/User';

// Function to test connection
async function connect() {
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Function to migrate Models into database
async function migrate(user: any, category: any, order: any, product: any) {
  await user.sync({ alter: true }).then(() => {
    console.log('The table for the User model was just (re)created!');
  }).catch((error: any) => {
    console.error('La table n\'a pas pu être créée.', error);
  });

  await category.sync({ alter: true }).then(() => {
    console.log('The table for the Category model was just (re)created!');
  }).catch((error: any) => {
    console.error('La table n\'a pas pu être créée.', error);
  });

  await product.sync({ alter: true }).then(() => {
    console.log('The table for the Product model was just (re)created!');
  }).catch((error: any) => {
    console.error('La table n\'a pas pu être créée.', error);
  });

  await order.sync({ alter: true }).then(() => {
    console.log('The table for the Order model was just (re)created!');
  }).catch((error: any) => {
    console.error('La table n\'a pas pu être créée.', error);
  });
}

// Function call
connect();
migrate(User, Category, Order, Product);
