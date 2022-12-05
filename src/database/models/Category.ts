import Product from './Product';

import sequelize from '../../instance';

const DataTypes = require('sequelize');

// Creation of Category Model
const Category = sequelize.define('Category', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.hasMany(Product);
Product.belongsTo(Category);

export default Category;
