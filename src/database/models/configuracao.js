'use strict';

module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('configuracoes', {
      usuarioId: DataTypes.INTEGER,   
      horaInicio: DataTypes.STRING,
      horaFim: DataTypes.STRING,
      intervalo: DataTypes.INTEGER,
      domingo: DataTypes.BOOLEAN,
      segunda: DataTypes.BOOLEAN,
      terca: DataTypes.BOOLEAN,
      quarta: DataTypes.BOOLEAN,
      quinta: DataTypes.BOOLEAN,
      sexta: DataTypes.BOOLEAN,
      sabado: DataTypes.BOOLEAN,
      textoAgendamento: DataTypes.STRING,
      textoReagendamento: DataTypes.STRING,
      textoCancelamento: DataTypes.STRING,


    }, {});
    
    usuario.associate = function(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'usuarioId', as: 'usuarios' })
    };

    return usuario; 
}
