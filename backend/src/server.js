const Application = require('./app');

const application = new Application();

application.app.listen(9000, () => {
  console.log('Server run in port 9000');
});
