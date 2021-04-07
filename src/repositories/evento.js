'use strict';

const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const db = require('../database');

const evento = db.Evento;

module.exports = class SituacaoEvento {


     static async getUsuarioId(usuarioId) {
         return await evento.findAll({ where: { usuarioId, situacao_evento_id: { [Op.ne]: 3 }}});
     }

     static async getNext(usuarioId, limit) {
        return await evento.findAll({ limit: parseInt(limit), where: { usuarioId, situacao_evento_id: { [Op.ne]: 3 }, data_inicio_atendimento: { [Op.gte]: new Date() }}});
    }

    
    static async getPct(id) {
        return  await evento.findAll({
            where: { 
                usuario_id: id,
                $and: Sequelize.where(Sequelize.fn("month", Sequelize.col("data_inicio_atendimento")), new Date().getMonth() + 1)
            },
            attributes: [
                    'tipo_evento_id', 
                    [Sequelize.fn('count', Sequelize.col('tipo_evento_id')), 'total']
                ],
            group: ['tipo_evento_id'],
            raw : true
        });
    }

    static async getQtd(id) {
        return  await evento.findAll({
            where: { 
                usuario_id: id,
                $and: Sequelize.where(Sequelize.fn("month", Sequelize.col("data_inicio_atendimento")), new Date().getMonth() + 1)
            },
            attributes: [
                    [Sequelize.fn('DATE', Sequelize.col('data_inicio_atendimento')), 'data_inicio_atendimento'], 
                    [Sequelize.fn('count', Sequelize.col('id')), 'total']
                ],
            group: [Sequelize.fn('DATE', Sequelize.col('data_inicio_atendimento'))],
            order: [ [ 'data_inicio_atendimento', 'ASC' ]],
            raw : true
        });
    }

    static async insert(paramEvento) {
        const _evento = evento.build(paramEvento);
        return await _evento.save();
    }

     static async update(paramEvento) {
         await evento.update(paramEvento, { where: { id: paramEvento.id } });
     }
    
     static async delete(id) {
         await evento.destroy({ where: { id } });
     }
}