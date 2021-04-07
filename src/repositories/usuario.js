'use strict';

const db = require('../database');

const usuario = db.Usuario;

module.exports = class Usuario {

    static async getById(id) {
        return await usuario.findByPk(id);
    }

    static async getAll() {
        return await usuario.findAll( { include: "tipo_abordagens" }  );
    }

    static async getByLogin(login) {
        return await usuario.findAll( { include: "tipo_abordagens", where: { login }, raw: true });
    }

    static async insert(paramUsuario) {
        const _usuario = usuario.build({ 
            tipoAbordagemId: paramUsuario.tipoAbordagemId,
            tipoUsuario: paramUsuario.tipoUsuario,
            nome: paramUsuario.nome,
            login: paramUsuario.login,
            senha: paramUsuario.senha,
            ativo: paramUsuario.ativo
        });
        await _usuario.save();
    }

    static async update(paramUsuario) {

        const _usuario = { 
            tipoAbordagemId: paramUsuario.tipoAbordagemId,
            tipoUsuario: paramUsuario.tipoUsuario,
            nome: paramUsuario.nome,
            login: paramUsuario.login,
            ativo: paramUsuario.ativo
         };

         if(paramUsuario.senha !== '')
            _usuario.senha = paramUsuario.senha;

        await usuario.update(_usuario,
         { where: { id: paramUsuario.id } });
    }

    static async updateSenha(id, senha) {
         await usuario.update({ senha }, { where: { id } });
    }
    
    static async delete(id) {
        await usuario.destroy({ where: { id } });
    }
}
