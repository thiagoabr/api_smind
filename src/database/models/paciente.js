'use strict';

module.exports = (sequelize, DataTypes) => {
    const paciente = sequelize.define('pacientes', {
        usuarioId: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        dataNascimento: DataTypes.DATE,
        sexo: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING
    }, {});
    
    paciente.associate = function(models) {
      //  this.hasMany(models.DistribuidoraCidade);
    };

    return paciente; 
}
