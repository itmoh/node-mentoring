module.exports = function (config) {
    'use strict';
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        plugins: [
          'karma-phantomjs-launcher',
          'karma-jasmine'
        ],
        files: ['*.js']
    });
};
