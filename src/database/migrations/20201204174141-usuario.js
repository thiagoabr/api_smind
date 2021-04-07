'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("usuarios", {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      tipo_abordagem_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: "tipo_abordagens",
            key: "id"
        },
        onDelete: 'cascade'
      },
      tipo_usuario: {
        allowNull: false, 
        type: DataTypes.STRING(1)
      },
      nome: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      login: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      senha: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      ativo: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
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
  return queryInterface.dropTable("usuarios");
}
};
