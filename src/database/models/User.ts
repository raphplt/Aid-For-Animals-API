import sequelize from '../../instance';

const DataTypes = require('sequelize');

// Creation of User model
const User = sequelize.define('User', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
});

export default User;
