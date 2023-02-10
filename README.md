## Installation

You can install and configure moreLess using this command:

```shell
npm install @incodit/moreless
```

## Usage

```html
<div class="items">
    <div class="item">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <div class="item">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
</div>
```

```javascript
require('@incodit/moreless');
$(document).ready(function () {
    $('.item').moreLess({
        moreLabel: '... Read more', // optional
        lessLabel: '... Read less', // optional
        moreClass: 'read-more-link', // optional
        lessClass: 'read-less-link', // optional
        wordsCount: 50 // optional
    });
});
```
