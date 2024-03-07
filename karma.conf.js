const webpack = require('webpack');

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript', 'webpack'],
    mime: { 'text/x-typescript': ['ts'] },
    files: ['./src/**/*.ts'],
    preprocessors: {
      '**/*.ts': ['webpack', 'sourcemap', 'coverage'],
    },
    reporters: ['progress', 'karma-typescript', 'kjhtml', 'coverage'],
    browsers: ['Chrome'],
    colors: true,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,
    plugins: [
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require('karma-sourcemap-loader'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-typescript'),
      require('karma-webpack'),
    ],
    client: {
      jasmine: {},
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.ts$/i,
            use: ['@jsdevtools/coverage-istanbul-loader', 'ts-loader'],
          },
        ],
      },
      plugins: [
        new webpack.SourceMapDevToolPlugin({
          test: /\.(ts|js|css)($|\?)/i,
        }),
      ],
      resolve: {
        extensions: ['.ts'],
      },
    },
    webpackMiddleware: {
      logLevel: 'error',
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
      global: {},
    },
    karmaTypescriptConfig: {
      coverageOptions: {
        exclude: /\.(d|spec|test)\.ts/i,
      },
    },
  });
};
