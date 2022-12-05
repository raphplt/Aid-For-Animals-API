import sequelize from '../../instance';

const DataTypes = require('sequelize');

// Creation of Product model
const Product = sequelize.define('Product', {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
});

export default Product;
