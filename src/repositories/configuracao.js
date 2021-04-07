'use strict';

const db = require('../database');

const configuracao = db.Configuracao;

module.exports = class Configuracao {

    static async getByUsuarioId(id) {
        const _configuracao = await configuracao.findAll({
            where: { 
                usuario_id: id 
            },
            raw : true
        });
        
        return _configuracao;
    }

    static async insert(paramConfiguracao) {
        const _config = configuracao.build({ 
            usuarioId: paramConfiguracao.usuarioId,
            horaInicio: paramConfiguracao.horaInicio,
            horaFim: paramConfiguracao.horaFim,
            intervalo: paramConfiguracao.intervalo,
            domingo: paramConfiguracao.domingo,
            segunda: paramConfiguracao.segunda,
            terca: paramConfiguracao.terca,
            quarta: paramConfiguracao.quarta,
            quinta: paramConfiguracao.quinta,
            sexta: paramConfiguracao.sexta,
            sabado: paramConfiguracao.sabado,
            textoAgendamento: paramConfiguracao.textoAgendamento,
            textoReagendamento: paramConfiguracao.textoReagendamento,
            textoCancelamento: paramConfiguracao.textoCancelamento
        });
        await _config.save();
    }

    static async update(paramConfiguracao) {
        await configuracao.update({ 
            usuarioId: paramConfiguracao.usuarioId,
            horaInicio: paramConfiguracao.horaInicio,
            horaFim: paramConfiguracao.horaFim,
            intervalo: paramConfiguracao.intervalo,
            domingo: paramConfiguracao.domingo,
            segunda: paramConfiguracao.segunda,
            terca: paramConfiguracao.terca,
            quarta: paramConfiguracao.quarta,
            quinta: paramConfiguracao.quinta,
            sexta: paramConfiguracao.sexta,
            sabado: paramConfiguracao.sabado,
            textoAgendamento: paramConfiguracao.textoAgendamento,
            textoReagendamento: paramConfiguracao.textoReagendamento,
            textoCancelamento: paramConfiguracao.textoCancelamento
         },
         { where: { id: paramConfiguracao.id } });
    }
    
    static async delete(id) {
        await configuracao.destroy({ where: { id } });
    }
}