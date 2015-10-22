# Make MDL work on iPhone and iPad

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

[MDL](http://www.getmdl.io) is a fine alternative for [Twitter Bootstrap](http://getbootstrap.com/).
It is compatible with browsers that implement [HTML5](http://www.w3.org/html/wg/drafts/html/master/
). This package aims to make MDL compatible with older browsers, espacially with Safari
on iPhone and iPad.

Package contains:

 * Prefixed (cross-browser) CSS3 properties for MDL components,
 * A polyfill for MDL grid for old browsers,
 * Required JS and DOM polyfills (as bower dependencies).

## Getting the code

Preferred way to get mdl-compat is to use [bower](http://bower.io/).
```shell
bower install mdl-compat --save
```

Or use [npm](https://www.npmjs.com/) (when using [browserify](
https://github.com/substack/node-browserify)):
```shell
npm install mdl-compat --save
```

## Usage

### MDL Components

To add cross-browser styles for MDL components, just import mdl-compat to your main
[Sass](http://sass-lang.com/) file.

```sass
@import 'bower\_components/mdl-compat/src/_mdl-compat.scss';
```

...or link compiled CSS into your HTML.

```html
<link href="bower_components/mdl-compat/dist/mdl-compat.min.css" rel="stylesheet">
```

### MDL Grid

On all browsers that do not implement `flex-wrap` property (or any of it's prefixed versions)
a JavaScript polyfill is required for MDL grid to work properly.

```html
<script src="bower_components/js-polyfills/polyfill.js"
    type="text/javascript"></script>
<script src="bower_components/js-polyfills/dom.js"
    type="text/javascript"></script>
<script src="bower_components/media-match/media.match.js"
    type="text/javascript"></script>
<!-- mdl-compat.js must be loaded after JS and DOM polyfills -->
<script src="bower_components/mdl-compat/dist/mdl-compat.min.js"
    type="text/javascript"></script>
```

When using [browserify](https://github.com/substack/node-browserify) module exports
a loader function that must be applied on a window object.

```javascript
var loadMdlCompat = require('mdl-compat');
// TODO polyfills must be loaded first
window.addEventlistener('load', loadMdlCompat.bind(null, window));
```

## Contributing

This project contains styles for components that I used un my projects so far. Further components
will be covered when needed. Flexbox-related mixins can be found in `src/internal/_mixins.scss`.
Pull requests are very welcome!

## License

[Apache License 2.0](LICENSE)

[npm-url]: https://npmjs.org/package/mdl-compat
[npm-image]: https://badge.fury.io/js/mdl-compat

[travis-url]: http://travis-ci.org/webfront-toolkit/mdl-compat
[travis-image]: https://secure.travis-ci.org/webfront-toolkit/mdl-compat.png?branch=master

