'use strict';

module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuarios', {
      tipoAbordagemId: DataTypes.INTEGER,   
      tipoUsuario: DataTypes.STRING,
      nome: DataTypes.STRING,
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN
    }, {});
    
    usuario.associate = function(models) {
      this.belongsTo(models.TipoAbordagem, { foreignKey:'tipoAbordagemId', as: 'tipo_abordagens' })
    };

   return usuario; 
}
