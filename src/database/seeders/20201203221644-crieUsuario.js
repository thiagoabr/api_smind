'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        const crypto  = async (senha) => {
            return await bcrypt.hash(senha, 10);
        };

        return queryInterface.bulkInsert('usuarios',[
            { id: 1, tipo_abordagem_id: 1,  tipo_usuario: 'A', nome: 'Administrador', login: 'admin@smind.com', senha: await crypto('adm@123'),  ativo: true, created_at: new Date(), updated_at: new Date() }, 
            { id: 2, tipo_abordagem_id: 1, tipo_usuario: 'U', nome: 'Psicólogo com dados', login: 'psi@smind.com', senha: await crypto('psi@123'), ativo: true, created_at: new Date(), updated_at: new Date() }, 
            { id: 3, tipo_abordagem_id: 1, tipo_usuario: 'U', nome: 'Psicólogo Google', login: 'smind.clinica@gmail.com', senha: await crypto('@smind123'), ativo: true, created_at: new Date(), updated_at: new Date() }, 

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
