module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: require('./controllers/site/index')
        }
    },
    // Public
    {
        method: 'GET',
        path: '/assets/{param*}',
        config: {
            auth: false,
            handler: require('./controllers/site/assets')
        }
    }
];
