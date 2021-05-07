const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        password: DataTypes.STRING,
        deliveryman: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = User;
