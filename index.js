// This is the hapi plugin version to be included in other projects

// Dependencies
var Hapi = require('hapi');

// Server Config
var config = require('./server/config');

// Hapi Server Plugins
var plugins = require('./server/config/plugins');

exports.register = function(plugin, options, next) {

	plugin.register(plugins, function(err) {
        if (err) throw err;
    });

	plugin.route(require('./server/routes/base'));
    plugin.route(require('./server/routes/static'));

	plugin.views(config.hapi.options.views);
	
	next();
};

exports.register.attributes = {
    pkg: require("./package.json")
}