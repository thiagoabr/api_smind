const configuracaoRepository = require('../repositories/configuracao');

module.exports = class Paciente {

    static async get(req, res){
        try {      
            const configuracao = await configuracaoRepository.getByUsuarioId(req.params.id);

            res.status(200).send(configuracao);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async update(req, res){
        try {      
            
            let params = {
                id: 0,
                usuarioId: req.params.id,
                horaInicio: req.body.horaInicio,
                horaFim: req.body.horaFim,
                intervalo: req.body.intervalo,
                domingo: req.body.domingo,
                segunda: req.body.segunda,
                terca: req.body.terca,
                quarta: req.body.quarta,
                quinta: req.body.quinta,
                sexta: req.body.sexta,
                sabado: req.body.sabado,
                textoAgendamento: req.body.textoAgendamento,
                textoReagendamento: req.body.textoReagendamento,
                textoCancelamento: req.body.textoCancelamento

            }
            
            const configuracao = await configuracaoRepository.getByUsuarioId(req.params.id);

            if(configuracao.length === 0) {
                await configuracaoRepository.insert(params);
            } else {
                params.id = req.params.id;
                await configuracaoRepository.update(params);
            }            
            
            res.status(200).send();
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }
}