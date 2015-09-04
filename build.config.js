module.exports = {
  dir: {
    build: './dist/',
  },

  css: {
    src: [
      './src/mdl-compat.scss'
    ]
  },

  js: {
    src: [
      './lib/mdl-compat.js'
    ]
  },

  jshint: {
    globals: {
      'window': {},
      'document': {},
    },
  },
};

