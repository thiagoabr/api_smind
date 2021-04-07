const diagnosticoRepository = require('../repositories/diagnostico');

module.exports = class Diagnostico {
    static async salvar(respostas, resultado) {

        let result = '';
        
        const length = 20;
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        const hash = result;
        //prepararDados
        await diagnosticoRepository.insert(respostas, resultado, hash);

        return hash;
    }
}