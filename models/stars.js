module.exports = (sequelize, DataTypes) => sequelize.define(
  'stars',
  {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      note_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      auth_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
  },
  {
      tableName: 'stars',
  }
)