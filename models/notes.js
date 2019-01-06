// models/notes.js

module.exports = (sequelize, DataTypes) => sequelize.define(
  'notes',
  {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      auth_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      read_num:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      star_num: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      comment_num: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      content: {
        type: DataTypes.STRING,
        defaultValue:'',
      },
      labels: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumb_url: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
  },
  {
      tableName: 'notes',
  }
)