module.exports = function(config){
  config.set({
    basePath: '',

    files: [
      'test/unit/*.js'
    ],

    frameworks: ['mocha', 'chai', 'browserify'],

    preprocessors: {
      'test/**/*.js': ['browserify'],
      'waveform-data.js': ['browserify']
    },

    browserify: {
      external: ['dist/waveform-data.min.js']
    },

    exclude: [],

    reporters: ['progress'],

    port: 8080,

    runnerPort: 9100,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['SauceChrome', 'SauceFirefox', 'SauceFirefoxLinux', 'SauceSafari6', 'SauceSafari7', 'SauceIE9', 'SauceIE10', 'SauceIE11'],

    sauceLabs: {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      build: process.env.TRAVIS_JOB_NUMBER || 'local tunnel',
      testName: 'waveform-data.js (by BBC RD IRFS)',
      startConnect: true
    },

    customLaunchers: {
      'SauceChrome': {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'OS X 10.6',
        version: '27'
      },
      'SauceFirefox': {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'Windows 7',
        version: '21'
      },
      'SauceFirefoxLinux': {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'Linux',
        version: '26'
      },
      'SauceSafari6': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.8',
        version: '6'
      },
      'SauceSafari7': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.9',
        version: '7'
      },
      'SauceIE9': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      },
      'SauceIE10': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8',
        version: '10'
      },
      'SauceIE11': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11'
      }
    },

    captureTimeout: 5000,

    singleRun: false
  });
};
