const auth = require('../middleware/auth');
const tipoAbordagem = require('../controllers/tipoAbordagem');
const tipoConsulta = require('../controllers/tipoConsulta');
const situacaoConsulta = require('../controllers/situacaoConsulta');
const paciente = require('../controllers/paciente');
const usuario = require('../controllers/usuario');
const configuracao = require('../controllers/configuracao');
const evento = require('../controllers/evento');

module.exports = class Route {
    constructor(server){
        server = this.main(server);
        return server;
    }

    main(server){

        //Autenticação
        server.route('/login').post(usuario.auth);
        server.route('/loginGoogle').post(usuario.authGoogle);        

        //Evento
        server.route('/evento').post(evento.insert);
        server.route('/evento/:id').get(evento.get);
        server.route('/evento/:id/next/limit/:limit').get(evento.getNext);
        server.route('/evento/:id/qtd').get(evento.getQtd);
        server.route('/evento/:id/pct').get(evento.getPct);
        server.route('/evento/:id').patch(evento.update);
        server.route('/evento/:id').delete(evento.delete);

        //Paciente
        server.route('/paciente/user/:id').get(auth).get(paciente.get);
        server.route('/paciente/:id').get(auth).get(paciente.getById);
        server.route('/paciente/').get(auth).post(paciente.insert);
        server.route('/paciente/:id').get(auth).patch(paciente.update);
        server.route('/paciente/:id').get(auth).delete(paciente.delete);
        server.route('/paciente/usuario/:id/cpf/:cpf').get(paciente.getByCpf);
        server.route('/paciente/:id/last/:limit').get(paciente.getLast);
        server.route('/paciente/:id/qtd').get(paciente.getQtd);

        //Usuário
        server.route('/usuario').get(auth).get(usuario.get);
        server.route('/usuario/:id').get(auth).get(usuario.getById);
        server.route('/usuario/').get(auth).post(usuario.insert);
        server.route('/usuario/:id').get(auth).patch(usuario.update);
        server.route('/usuario/:id').get(auth).delete(usuario.delete);
        server.route('/usuario/senha/:id').get(auth).post(usuario.updateSenha);

        //Situação consulta
        server.route('/situacaoConsulta').get(auth).get(situacaoConsulta.get);
        server.route('/situacaoConsulta/:id').get(auth).get(situacaoConsulta.getById);
        server.route('/situacaoConsulta/').get(auth).post(situacaoConsulta.insert);
        server.route('/situacaoConsulta/:id').get(auth).patch(situacaoConsulta.update);
        server.route('/situacaoConsulta/:id').get(auth).delete(situacaoConsulta.delete);

        //Tipo Abordagem
        server.route('/tipoAbordagem').get(tipoAbordagem.get);
        server.route('/tipoAbordagem/:id').get(auth).get(tipoAbordagem.getById);
        server.route('/tipoAbordagem/').get(auth).post(tipoAbordagem.insert);
        server.route('/tipoAbordagem/:id').get(auth).patch(tipoAbordagem.update);
        server.route('/tipoAbordagem/:id').get(auth).delete(tipoAbordagem.delete);

        //Tipo consulta
        server.route('/tipoConsulta').get(auth).get(tipoConsulta.get);
        server.route('/tipoConsulta/:id').get(auth).get(tipoConsulta.getById);
        server.route('/tipoConsulta/').get(auth).post(tipoConsulta.insert);
        server.route('/tipoConsulta/:id').get(auth).patch(tipoConsulta.update);
        server.route('/tipoConsulta/:id').get(auth).delete(tipoConsulta.delete);

        //Configuração
        server.route('/configuracao/usuario/:id').get(configuracao.get);
        server.route('/configuracao/usuario/:id').patch(configuracao.update);

	   return server;
    }
}
