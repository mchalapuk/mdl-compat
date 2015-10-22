module.exports = {
  dir: {
    build: 'dist/',
  },

  css: {
    src: [
      'src/internal/mdl-compat.scss',
    ]
  },

  js: {
    src: [
      'index.js', 'src/*.js',
    ],
    main: [
      'src/browserify.js',
    ]
  },

  jshint: {
    globals: {
      'window': {},
      'document': {},
    },
  },
};

