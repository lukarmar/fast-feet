const bcrypt = require('bcrypt');

const generatedPassword = bcrypt.hashSync('#FastFeet2021#', 8);

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrador',
          email: 'admin@fastfeet.com',
          password: generatedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async () => {},
};
