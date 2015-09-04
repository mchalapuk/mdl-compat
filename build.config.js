module.exports = {
  dir: {
    build: './dist/',
  },

  css: {
    src: [
      './src/internal/mdl-compat.scss'
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

