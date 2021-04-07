const tipoAbordagemRepository = require('../repositories/tipoAbordagem');

module.exports = class TipoAbordagem {

    static async get(req, res){
        try {      
            const TipoAbordagens = await tipoAbordagemRepository.getAll();

            res.status(200).send(TipoAbordagens);
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
            const _tipoAbordagem = await tipoAbordagemRepository.getById(req.params.id);
            res.status(200).send(_tipoAbordagem);
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
            await tipoAbordagemRepository.insert(req.body.descricao);

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
            await tipoAbordagemRepository.update(req.params.id, req.body.descricao);
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
            await tipoAbordagemRepository.delete(req.params.id);
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