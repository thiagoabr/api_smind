'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("tipo_abordagens", {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      descricao: {
          allowNull: false, 
          type: DataTypes.STRING
      },            
      created_at: {
          allowNull: false,
          type: DataTypes.DATE
      },
      updated_at: {
          allowNull: false,
          type: DataTypes.DATE
      },
      deleted_at: {
          type: DataTypes.DATE
      },
  });
},

down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable("tipo_abordagens");
}
};
