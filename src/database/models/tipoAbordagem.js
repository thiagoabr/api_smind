'use strict';

module.exports = (sequelize, DataTypes) => {
    const tipoAbordagem = sequelize.define('tipo_abordagens', {
        descricao: DataTypes.STRING
    }, {});
    
    tipoAbordagem.associate = function(models) {
      //  this.hasMany(models.DistribuidoraCidade);
    };

    return tipoAbordagem; 
}
