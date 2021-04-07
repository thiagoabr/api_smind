'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let data = new Date();

        return queryInterface.bulkInsert('pacientes',[
            { id: 1, usuario_id: 2, nome: 'Luiz Miguel', cpf: '92678621030', email: 'luiz-m@globo.com' ,telefone: '21999999902', created_at: data, updated_at: new Date() }, 
        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
