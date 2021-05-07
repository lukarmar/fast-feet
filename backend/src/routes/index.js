const { Router } = require('express');

const userRoutes = require('./user.router');

const routers = Router();

routers.use('/user', userRoutes);

module.exports = routers;
