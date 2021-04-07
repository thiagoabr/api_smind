'use strict';

module.exports = (sequelize, DataTypes) => {
    const evento = sequelize.define('eventos', {
      usuarioId: DataTypes.INTEGER,
      tipoEventoId: DataTypes.INTEGER,
      pacienteId: DataTypes.INTEGER,
      situacaoEventoId: DataTypes.INTEGER,
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      dataInicioAtendimento: DataTypes.DATE,
      dataFimAtendimento: DataTypes.DATE,
      telefone: DataTypes.STRING(11),
      observacao: DataTypes.STRING(11)
    }, {});
    
    evento.associate = function(models) {
      this.belongsTo(models.TipoEvento, { foreignKey: 'tipoEventoId', as: 'paciente' });
      this.belongsTo(models.Paciente, { foreignKey: 'pacienteId', as: 'tipo_evento' });
      this.belongsTo(models.SituacaoEvento, { foreignKey: 'situacaoEventoId', as: 'situacao_evento' });
    };

    return evento; 
}
