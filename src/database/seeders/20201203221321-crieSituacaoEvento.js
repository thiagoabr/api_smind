'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('situacao_eventos',[
            { id: 1, descricao: 'Criado', created_at: new Date(), updated_at: new Date() }, 
            { id: 2, descricao: 'Alterado', created_at: new Date(), updated_at: new Date() }, 
            { id: 3, descricao: 'Excluído', created_at: new Date(), updated_at: new Date() }, 

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
