'use strict';

const db = require('../database');

const situacaoEvento = db.SituacaoEvento;

module.exports = class SituacaoEvento {

    static async getById(id) {
        return await situacaoEvento.findByPk(id);
    }

    static async getAll() {
        return await situacaoEvento.findAll({
            attributes: [ 'id', 'descricao'],
        });
    }

    static async insert(paramSituacaoEvento) {
        const _situacaoEvento = situacaoEvento.build({ descricao: paramSituacaoEvento.descricao});
        await _situacaoEvento.save();
    }

    static async update(paramSituacaoEvento) {
        await situacaoEvento.update({ descricao: paramSituacaoEvento.descricao },
                                { where: { id: paramSituacaoEvento.id } });
    }
    
    static async delete(id) {
        await situacaoEvento.destroy({ where: { id } });
    }
}