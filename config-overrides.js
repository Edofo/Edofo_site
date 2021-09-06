const {override} = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'none'",
    'manifest-src': "'self'",
    'connect-src': ["'self' https://www.google-analytics.com/"],
    'base-uri': "'self'",
    'object-src': "'none'",
    'img-src': "*",
    'font-src': "*",
    'style-src': ["'self'"],
    'style-src-elem': ["'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com/  https://pro.fontawesome.com"],
    'script-src': ["'self'"],
    'script-src-elem': ["'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com"]
};

function addCspHtmlWebpackPlugin(config) {
    if(process.env.NODE_ENV === 'production') {
        config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
    }

    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};