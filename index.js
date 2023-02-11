(function ($) {
  $.fn.moreLess = function (options) {
      const settings = $.extend(
          {
              moreLabel: 'Read more',
              lessLabel: 'Read less',
              moreClass: '',
              lessClass: '',
              wordsCount: 50,
          },
          options
      );

      function collapse(content, index) {
          const words = content.text().trim().split(/\s+/);
          if (words.length > settings.wordsCount) {
              words.splice(settings.wordsCount, 9e9);
              words.push('<a href="#" data-id="' + index + '" class="incodit-expand-content ' + settings.moreClass + '">' + settings.moreLabel + '</a>');
          }
          content.html(words.join(' '));
      }

      const items = [];
      const selectors = [];
      this.each(function (index) {
          const item = $(this);
          items.push(item.html());
          selectors.push(item);
          collapse(item, index);
      });

      $(document).on('click', '.incodit-expand-content', function (e) {
          e.preventDefault();
          const index = $(this).attr('data-id');
          const selector = selectors[index];
          selector.html(items[index] + '<a href="#" data-id="' + index + '" class="incodit-collapse-content ' + settings.lessClass + '">' + settings.lessLabel + '</a>');
      });

      $(document).on('click', '.incodit-collapse-content', function (e) {
          e.preventDefault();
          const index = $(this).attr('data-id');
          const selector = selectors[index];
          collapse(selector, index);
      });
  };
})(jQuery);