const pacienteRepository = require('../repositories/paciente');

module.exports = class Paciente {

    static async get(req, res){
        try {      
            const pacientes = await pacienteRepository.getByUsuarioId(req.params.id);

            res.status(200).send(pacientes);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async getByCpf(req, res){
        try {      
            const paciente = await pacienteRepository.getByCpf(req.params.id, req.params.cpf);

            res.status(200).send(paciente);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
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
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async getLast(req, res){
        try {      
            const _paciente = await pacienteRepository.getLast(req.params.id, req.params.limit);
            res.status(200).send(_paciente);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async getQtd(req, res){
        try {      
            const _paciente = await pacienteRepository.getQtd(req.params.id, req.params.limit);
            res.status(200).send(_paciente);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async insert(req, res){
        try {      
            await pacienteRepository.insert({ 
                usuarioId: req.body.usuarioId,
                nome: req.body.nome,
                cpf: req.body.cpf,
                dataNascimento: req.body.dataNascimento,
                sexo: req.body.sexo,
                email: req.body.email,
                telefone: req.body.telefone
            });

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

    static async update(req, res){
        try {      
            await pacienteRepository.update({ 
                id: req.params.id, 
                usuarioId: req.body.usuarioId,
                nome: req.body.nome,
                cpf: req.body.cpf,
                dataNascimento: req.body.dataNascimento,
                sexo: req.body.sexo,
                email: req.body.email,
                telefone: req.body.telefone
            });
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
            await pacienteRepository.delete(req.params.id);
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