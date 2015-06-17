// -- App Log -----------------------------------------------------------------
// require('newrelic');

// -- Setup --------------------------------------------------------------------
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	port: process.env.PORT || 3000
});

// -- Views --------------------------------------------------------------------

server.views({
    engines: {
        html: require('handlebars')
    },
    path: 'public/views',
    layoutPath: 'public/views/layout',
    layout: 'default'
});

// -- Routes -------------------------------------------------------------------

server.route(require('./app/routes'));

// -- States -------------------------------------------------------------------

server.state('session', {
    ttl: 24 * 60 * 60 * 1000,
    isSecure: false,
    path: '/',
    encoding: 'base64json'
});

// -- Start --------------------------------------------------------------------

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
