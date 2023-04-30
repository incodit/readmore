window.$ = window.jQuery = require("jquery");
require("./index");
$(function () {
  $(".item").readMore({
    moreLabel: "... Read more",
    lessLabel: "... Read less",
    moreClass: "read-more-link",
    lessClass: "read-less-link",
    wordsCount: 50,
  });
});
