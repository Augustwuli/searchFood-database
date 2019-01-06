module.exports = (sequelize, DataTypes) => sequelize.define(
  'labels',
  {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      num: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
  },
  {
      tableName: 'labels',
  }
)