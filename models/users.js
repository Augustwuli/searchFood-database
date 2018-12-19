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
      defaultValue: '用户',
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
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    deletedAt: 'updated_at',
    tableName: 'users',
  }
)