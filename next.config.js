/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
        config.node = {
            fs: 'empty',
            net: 'empty',
        };
        config.plugins.push(new webpack.EnvironmentPlugin(process.env));
        return config;
    },
};
