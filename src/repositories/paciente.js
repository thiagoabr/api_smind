'use strict';

var Sequelize = require("sequelize");
const db = require('../database');

const paciente = db.Paciente;

module.exports = class SituacaoEvento {

    static async getById(id) {
        return await paciente.findByPk(id);
    }

    static async getByUsuarioId(id) {
        const pacientes = await paciente.findAll({
            where: { 
                usuario_id: id 
            },
            raw : true
        });
        
        return pacientes;
    }

    static async getLast(id, limit) {
        const pacientes = await paciente.findAll({
            limit: parseInt(limit),
            where: { usuario_id: id 
            },
            order: [ [ 'id', 'DESC' ]],
            raw : true
        });
        
        return pacientes;
    }
    
    static async getQtd(id, limit) {
        const pacientes = await paciente.findAll({
            where: { usuario_id: id,
                     $and: Sequelize.where(Sequelize.fn("month", Sequelize.col("created_at")), new Date().getMonth() + 1)
            },
            attributes: [
                    [Sequelize.fn('DATE', Sequelize.col('created_at')), 'created_at'], 
                    [Sequelize.fn('count', Sequelize.col('id')), 'total']
                ],
            group: [Sequelize.fn('DATE', Sequelize.col('created_at'))],
            order: [ [ 'created_at', 'ASC' ]],
            raw : true
        });
        
        return pacientes;
    }
    

    static async getAll() {
        return await paciente.findAll({
            attributes: [ 'id', 'usuarioId', 'nome', 'cpf', 'dataNascimento', 'sexo', 'email']
        });
    }

    static async getByCpf(id, cpf) {
        return await paciente.findOne({where: { usuario_id: id, cpf },
            attributes: [ 'id', 'usuarioId', 'nome', 'cpf', 'dataNascimento', 'sexo', 'telefone', 'email']
        });
    }

    

    static async insert(paramPaciente) {
        const _paciente = paciente.build({ 
            usuarioId: paramPaciente.usuarioId,
            nome: paramPaciente.nome,
            cpf: paramPaciente.cpf,
            dataNascimento: paramPaciente.dataNascimento,
            sexo: paramPaciente.sexo,
            email: paramPaciente.email,
            telefone: paramPaciente.telefone
        });
        await _paciente.save();
    }

    static async update(paramPaciente) {
        await paciente.update({ 
            usuarioId: paramPaciente.usuarioId,
            nome: paramPaciente.nome,
            cpf: paramPaciente.cpf,
            dataNascimento: paramPaciente.dataNascimento,
            sexo: paramPaciente.sexo,
            email: paramPaciente.email,
            telefone: paramPaciente.telefone
         },
         { where: { id: paramPaciente.id } });
    }
    
    static async delete(id) {
        await paciente.destroy({ where: { id } });
    }
}