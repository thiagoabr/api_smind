'use strict';

const db = require('../database');

const tipoAbordagem = db.TipoAbordagem;

module.exports = class TipoAbordagem {

    static async getById(id) {
        return await tipoAbordagem.findByPk(id);
    }

    static async getAll() {
        return await tipoAbordagem.findAll({
            attributes: [ 'id', 'descricao' ],
        });
    }

    static async insert(descricao) {
        const _tipoAbordagem = tipoAbordagem.build({ descricao });
        await _tipoAbordagem.save();
    }

    static async update(id, descricao) {
        await tipoAbordagem.update({ descricao },
                                       { where: { id } });
    }
    
    static async delete(id) {
        await tipoAbordagem.destroy({ where: { id } });
    }
}