const tipoEventoRepository = require('../repositories/tipoEvento');

module.exports = class TipoConsulta {

    static async get(req, res){
        try {      
            const tipoEventos = await tipoEventoRepository.getAll();

            res.status(200).send(tipoEventos);
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
            const _tipoEvento = await tipoEventoRepository.getById(req.params.id);
            res.status(200).send(_tipoEvento);
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
            await tipoEventoRepository.insert({ descricao: req.body.descricao, cor: req.body.cor});

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
            await tipoEventoRepository.update({ id: req.params.id, descricao: req.body.descricao, cor: req.body.cor});
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
            await tipoEventoRepository.delete(req.params.id);
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
