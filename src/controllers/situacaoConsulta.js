const situacaoEventoRepository = require('../repositories/situacaoEvento');

module.exports = class SituacaoConsulta {

    static async get(req, res){
        try {      
            const situacaoEvento = await situacaoEventoRepository.getAll();

            //console.log(situacaoEvento);

            res.status(200).send(situacaoEvento);
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
            const situacaoEvento = await situacaoEventoRepository.getById(req.params.id);
            res.status(200).send(situacaoEvento);
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
            await situacaoEventoRepository.insert({ descricao:  req.body.descricao });

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
            await situacaoEventoRepository.update({ id: req.params.id, descricao: req.body.descricao });
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
            await situacaoEventoRepository.delete(req.params.id);
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