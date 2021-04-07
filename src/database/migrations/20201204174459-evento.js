'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("eventos", {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      tipo_evento_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: "tipo_eventos",
            key: "id"
        },
        onDelete: 'cascade'        
      },
      paciente_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: "pacientes",
            key: "id"
        },
        onDelete: 'cascade'        
      },
      situacao_evento_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: "situacao_eventos",
            key: "id"
        },
        onDelete: 'cascade'        
      },
      usuario_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: "usuarios",
            key: "id"
        },
        onDelete: 'cascade'        
      },
      nome: {
        allowNull: true,
        type: DataTypes.STRING
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING(11)
      },
      data_inicio_atendimento: {
        allowNull: false,
        type: DataTypes.DATE
      },
      data_fim_atendimento: {
        allowNull: false,
        type: DataTypes.DATE
      },
      telefone: {
        allowNull: true,
        type: DataTypes.STRING(11)
      },
      observacao: {
        allowNull: true,
        type: DataTypes.STRING(1000)
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
  return queryInterface.dropTable("eventos");
}
};
