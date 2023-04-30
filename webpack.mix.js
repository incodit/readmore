let mix = require("laravel-mix");
mix
  .js("index.js", "readmore.js")
  .js("demo.js", "demo/demo.js")
  .setPublicPath("./");
