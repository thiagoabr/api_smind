'use strict';

module.exports = (sequelize, DataTypes) => {
    const situacaoEvento = sequelize.define('situacao_eventos', {
        descricao: DataTypes.STRING
    }, {});
    
    situacaoEvento.associate = function(models) {
      //  this.hasMany(models.DistribuidoraCidade);
    };

    return situacaoEvento; 
}
