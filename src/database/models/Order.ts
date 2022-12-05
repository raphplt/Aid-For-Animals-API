import Product from './Product';
import User from './User';

import sequelize from '../../instance';

const DataTypes = require('sequelize');

// Creation of Order model
const Order = sequelize.define('Order', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  dateOfPurchase: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
});

Order.belongsToMany(Product, { through: 'ProductUser' });
Product.belongsToMany(Order, { through: 'ProductUser' });

User.hasMany(Order);
Order.belongsTo(User);

export default Order;
