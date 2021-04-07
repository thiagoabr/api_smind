'use strict';

module.exports = (sequelize, DataTypes) => {
    const tipoEvento = sequelize.define('tipo_eventos', {
        descricao: DataTypes.STRING,
        cor: DataTypes.STRING
    }, {});
    
    tipoEvento.associate = function(models) {
      //  this.hasMany(models.DistribuidoraCidade);
    };

    return tipoEvento; 
}
