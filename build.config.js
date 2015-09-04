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
      './src/mdl-compat.js'
    ]
  },

  jshint: {
    globals: {
      'window': {},
      'document': {},
    },
  },
};

