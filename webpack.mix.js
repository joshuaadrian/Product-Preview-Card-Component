let mix = require('laravel-mix');

require('laravel-mix-polyfill');

mix.setPublicPath('dist');
mix.setResourceRoot('/dist/');

mix.webpackConfig({
    stats: {
        children: true,
    },
});

mix
.sass('styles/app.scss', 'styles')
.polyfill({
  enabled     : true,
  useBuiltIns : "usage",
  targets     : "firefox 50, IE 11"
})
.version()
.browserSync({
  proxy : 'product-preview.test',
  files : [
    '**/*.html',
    'dist/**/*.css'
  ]
})
.copyDirectory('images/', 'dist/images')
.sourceMaps()
.options({
  processCssUrls : false,
  purifyCss      : false,
  uglify         : {}
});
