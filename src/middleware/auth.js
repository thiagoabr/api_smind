const jwt = require('jsonwebtoken');
const secret = require('../config/auth.js');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'Nenhum token fornecido' });

    // Bearer sdhfiuwhfiuheufihehfeihufuef
    const parts = authHeader.split(' ');

    if (parts.length < 2)
        return res.status(401).send({ error: 'Token com erro' });

    const [ scheme, token ] = parts;

    if (!/^Bearer/.test(scheme))
        return res.status(401).send({ error: 'Token mal formatado' });

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token inválido' });

        req.usuarioId = decoded.id;
        req.usuarioNome = decoded.nome;
        req.usuarioTipo = decoded.tipoUsuario;
        req.usuarioTipoAbordagem = decoded.tipoAbordagem;

        return next();
    });
    
}