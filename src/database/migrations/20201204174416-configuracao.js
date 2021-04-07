'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("configuracoes", {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
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
      texto_agendamento: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      texto_reagendamento: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      texto_cancelamento: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      hora_inicio: {
        allowNull: false, 
        type: DataTypes.STRING(5)
      },
      hora_fim: {
        allowNull: false, 
        type: DataTypes.STRING(5)
      },
      intervalo: {
        allowNull: false, 
        type: DataTypes.INTEGER
      },
      domingo: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },
      segunda: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },
      terca: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },
      quarta: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },
      quinta: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },
      sexta: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },
      sabado: {
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
  return queryInterface.dropTable("configuracoes");
}
};
