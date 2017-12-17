const bootstrap = require('./bootstrap');
const config = require('./config');

const { port } = config;

const app = bootstrap(config);
module.exports = app.listen(port);

console.log('App running on port => ', port);



