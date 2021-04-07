const eventoRepository = require('../repositories/evento');

module.exports = class Evento {

    static async get(req, res){
        try {      
            const eventos = await eventoRepository.getUsuarioId(req.params.id);

            res.status(200).send(eventos);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno 1"})
            }
            console.log(error);
            
        }
    }

    static async getById(req, res){
        try {      
            const _paciente = await pacienteRepository.getById(req.params.id);
            res.status(200).send(_paciente);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno 2"})
            }
            console.log(error);
            
        }
    }

    static async getNext(req, res){
        try {      
            const eventos = await eventoRepository.getNext(req.params.id, req.params.limit);

            res.status(200).send(eventos);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno 3"})
            }
            console.log(error);
            
        }
    }

    static async getQtd(req, res){
        try {      
            const eventos = await eventoRepository.getQtd(req.params.id);
            res.status(200).send(eventos);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno 4"})
            }
            console.log(error);
            
        }
    }

    static async getPct(req, res){
        try {      
            const eventos = await eventoRepository.getPct(req.params.id);
            res.status(200).send(eventos);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno 5"})
            }
            console.log(error);
            
        }
    }

    static async insert(req, res){
        try {   
            
            const evento = { 
                 usuarioId: req.body.usuarioId,
                 tipoEventoId: req.body.tipoEventoId, 
                 pacienteId: req.body.pacienteId,  
                 situacaoEventoId: req.body.situacaoEventoId,
                 nome: req.body.nome,
                 cpf: req.body.cpf,
                 dataInicioAtendimento: req.body.dataInicioAtendimento,
                 dataFimAtendimento: req.body.dataFimAtendimento,
                 telefone: req.body.telefone,
                observacao: req.body.observacao
            };

            //console.log(evento);
            const _evento = await eventoRepository.insert(evento);

            res.status(200).send(_evento);
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

            const evento = { 
                id: req.params.id, 
                usuarioId: req.body.usuarioId,
                tipoEventoId: req.body.tipoEventoId, 
                pacienteId: req.body.pacienteId,  
                situacaoEventoId: req.body.situacaoEventoId,
                nome: req.body.nome,
                cpf: req.body.cpf,
                dataInicioAtendimento: req.body.dataInicioAtendimento,
                dataFimAtendimento: req.body.dataFimAtendimento,
                telefone: req.body.telefone,
               observacao: req.body.observacao
           };

           await eventoRepository.update(evento);

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

    static async delete(req, res){
        try {      
            await eventoRepository.delete(req.params.id);
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