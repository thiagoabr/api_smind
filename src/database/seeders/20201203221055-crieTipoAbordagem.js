'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tipo_abordagens',[
            { id: 1, descricao: 'T.C.C.', created_at: new Date(), updated_at: new Date() }, 
            { id: 2, descricao: 'Psicanálise', created_at: new Date(), updated_at: new Date() }, 

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
