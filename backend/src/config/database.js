module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'fastfeet',
  username: 'admin',
  password: 'admin-fastfeet',
  pool: {
    max: 5,
    min: 0,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
