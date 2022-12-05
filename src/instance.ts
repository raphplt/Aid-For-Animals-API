// Importing external variables and functions
import { Dialect } from 'sequelize';

const { Sequelize } = require('sequelize');

require('dotenv').config();

// Retrieving values from env file
const dbName = process.env.MYSQL_DB as string;
const dbUser = process.env.MYSQL_USER as string;
const dbHost = process.env.MYSQL_HOST;
const dbDriver = 'mysql' as Dialect;
const dbPassword = process.env.MYSQL_PASSWORD;

// Create a sequelize instance
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging: false,
});

// Export this instance
export default sequelize;
