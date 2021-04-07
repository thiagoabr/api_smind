'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('eventos',[
            { 
              id: 1,
              tipo_evento_id: 1, 
              paciente_id: null, 
              situacao_evento_id: 1, 
              usuario_id: 2,
              nome: 'Luiz Miguel', 
              cpf: '92678621030', 
              data_inicio_atendimento: '2021-04-19 11:00:00',
              data_fim_atendimento: '2021-04-19 12:00:00',
              telefone: '21999999902', 
              observacao: 'Chegar com antescedencia 10 minitos',
              created_at: new Date(), 
              updated_at: new Date() 
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
