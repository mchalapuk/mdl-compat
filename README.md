# Make Material Design Lite work on iPhone and iPad.

[MDL](http://www.getmdl.io) is a fine alternative for [Twitter Bootstrap](http://getbootstrap.com/).
Unfortunately, it is compatible only with browsers that implement [HTML 5](
http://www.w3.org/html/wg/drafts/html/master/), which makes it ususable for most commercial
projects. This project aims to make MDL compatible with older browsers, espacially with browsers
with browsers on iPhones and iPads.

Package contains:

 * Prefixed (cross-browser) CSS3 properties for MDL components,
 * A polyfill for MDL grid for old browsers,
 * Required JS and DOM polyfills (as bower dependencies).

## Getting the code

[git](https://git-scm.com/): `git clone https://github.com/mdl-e/mdl-compat.git`
[bower](http://bower.io/): `bower install mdl-compat`
[npm](https://www.npmjs.com/): not published yet

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

If you use MDL grid you need to add JavaScript polyfill, which will be enabled on all browsers that
does not implement 'flex-wrap' property (or any of it's prefixed versions).

```html
  <script src="bower_components/mdl-compat/dist/mdl-compat.min.js" type="text/javascript"></script>
```

## Contributing

This project contains styles for components that I used un my projects so far. Further components
will be covered as I will need them. Flexbox-related mixins can be found in
'src/internal/\_mixins.scss'. Pull requests are very welcome!

