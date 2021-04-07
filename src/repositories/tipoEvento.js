'use strict';

const db = require('../database');

const tipoEvento = db.TipoEvento;

module.exports = class TipoEvento {

    static async getById(id) {
        return await tipoEvento.findByPk(id);
    }

    static async getAll() {
        return await tipoEvento.findAll({
            attributes: [ 'id', 'descricao', 'cor' ],
        });
    }

    static async insert(paramTipoEvento) {
        const _tipoEvento = tipoEvento.build({ descricao: paramTipoEvento.descricao, cor: paramTipoEvento.cor  });
        await _tipoEvento.save();
    }

    static async update(paramTipoEvento) {
        await tipoEvento.update({ descricao: paramTipoEvento.descricao, cor: paramTipoEvento.cor },
                                { where: { id: paramTipoEvento.id } });
    }
    
    static async delete(id) {
        await tipoEvento.destroy({ where: { id } });
    }
}