// models/users.js

module.exports = (sequelize, DataTypes) => sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNULL: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNULL: false
    },
    password: {
      type: DataTypes.STRING,
      allowNULL: false
    },
    thumb_url: DataTypes.STRING,
    gender: DataTypes.STRING,
    signature: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: 'users',
  }
)