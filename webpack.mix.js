let mix = require("laravel-mix");
mix.js("index.js", "moreless.js").setPublicPath("./");
if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps().webpackConfig({
    devtool: "source-map",
  });
}
