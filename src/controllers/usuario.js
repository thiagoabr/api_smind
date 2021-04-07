const usuarioRepository = require('../repositories/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/auth.js');

module.exports = class Usuario {

    static async get(req, res){
        try {      
            const usuarios = await usuarioRepository.getAll();

            res.status(200).send(usuarios);
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
            const _usuario = await usuarioRepository.getById(req.params.id);
            res.status(200).send(_usuario);
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

            const usuario = await usuarioRepository.getByLogin(req.body.login);
            if (usuario.length > 0) {
                res.status(400).send('Login existente');
            } else {
                await usuarioRepository.insert({
                    tipoAbordagemId: req.body.tipoAbordagemId,
                    tipoUsuario: req.body.tipoUsuario,
                    nome: req.body.nome,
                    login: req.body.login,
                    senha: await bcrypt.hash(req.body.senha, 10),
                    ativo: req.body.ativo
                });

                res.status(200).send();
            }
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
            await usuarioRepository.update({
                id: req.params.id,
                tipoAbordagemId: req.body.tipoAbordagemId,
                tipoUsuario: req.body.tipoUsuario,
                nome: req.body.nome,
                login: req.body.login,
                senha: await bcrypt.hash(req.body.senha, 10),
                ativo: req.body.ativo
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

    static async updateSenha(req, res){
        try {      
            
            const senha = await bcrypt.hash(req.body.senha, 10);
            await usuarioRepository.updateSenha(req.params.id, senha);
            
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
            await usuarioRepository.delete(req.params.id);
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

    
    static async auth(req, res) {
        //Geração de token
        const generateToken = (params = {}) => {
            return jwt.sign(params, secret, {
                expiresIn: 86400,
            });        
        }

        const { login, senha } = req.body;    

        try {      
            let usuario = await usuarioRepository.getByLogin(login);

            if (usuario.length === 0) 
                return res.status(400).send({ error: 'Usuário não encontrado' });

            usuario = usuario[0];

            if (!await bcrypt.compare(senha, usuario.senha))
                return res.status(400).send({ error: 'Senha Inválida' });

            const _usuario = { 
                id : usuario.id, 
                nome: usuario.nome, 
                tipoUsuario: usuario.tipoUsuario, 
                tipoAbordagem: usuario['tipo_abordagens.descricao']
            };

            res.send({ 
                usuario: _usuario, 
                token: generateToken(_usuario)
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

    static async authGoogle(req, res) {
        //Geração de token
        const generateToken = (params = {}) => {
            return jwt.sign(params, secret, {
                expiresIn: 86400,
            });        
        }

        const { login } = req.body;    

        try {      
            let usuario = await usuarioRepository.getByLogin(login);

            if (usuario.length === 0) 
                return res.status(400).send({ error: 'Usuário não encontrado' });

            usuario = usuario[0];

            const _usuario = { 
                id : usuario.id, 
                nome: usuario.nome, 
                tipoUsuario: usuario.tipoUsuario, 
                tipoAbordagem: usuario['tipo_abordagens.descricao']
            };

            res.send({ 
                usuario: _usuario, 
                token: generateToken(_usuario)
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
}