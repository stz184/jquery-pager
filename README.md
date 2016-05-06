jQuery Pager
=====================

This is very simple pager generator plugin that you can use for paginating preloaded content or using Ajax, for example.
The plugin itself does not do nothing fancy - it just generate bootstrap styled pager widget and emit events everytime the page is changes 
so you can bind your custom logic.

### Installation
The bare minimum for using jQuery Pager on a web page is linking to the library along with one of the styles and calling pager:

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="../dist/pager.js"></script>
```

```js
$(document).ready(function() {
    $('#container-element').pager({itemsNumber: 200});
});
```

### Options

<table width="100%">
    <tr>
        <th valign="top" width="120px" align="left">Option</th>
        <th valign="top" align="left">Description</th>
        <th valign="top" width="60px" align="left">Type</th>
        <th valign="top" width="60px" align="left">Default</th>
    </tr>
    <tr>
        <td valign="top"><code>itemsNumber</code></td>
        <td valign="top">Total number of items to paginate</td>
        <td valign="top"><code>number</code></td>
        <td valign="top"><code>1</code></td>
    </tr>
    <tr>
        <td valign="top"><code>currentPage</code></td>
        <td valign="top">Currently selected page - it is marked as active on the pagiination widget and it is always positioned on the center.</td>
        <td valign="top"><code>number</code></td>
        <td valign="top"><code>1</code></td>
    </tr>
    <tr>
        <td valign="top"><code>farOffset</code></td>
        <td valign="top">Offset from the last page number displayed. For example, if the standard pager renders links 
        for page 1-2-3-4-5 and we have farOffset set to 2, the widget will append also links to page 10 and 20, because 
        5 + 2 = 7 which is rounded up to 10</td>
        <td valign="top"><code>number</code></td>
        <td valign="top"><code>2</code></td>
    </tr>
    <tr>
        <td valign="top"><code>range</code></td>
        <td valign="top">How much links to sequential pages to be displayed</td>
        <td valign="top"><code>number</code></td>
        <td valign="top"><code>6</code></td>
    </tr>
    <tr>
        <td valign="top"><code>range</code></td>
        <td valign="top">How much links to sequential pages to be displayed</td>
        <td valign="top"><code>number</code></td>
        <td valign="top"><code>6</code></td>
    </tr>
    <tr>
        <td valign="top"><code>farRange</code></td>
        <td valign="top">How much links to non-sequential pages to be displayed</td>
        <td valign="top"><code>number</code></td>
        <td valign="top"><code>2</code></td>
    </tr>
    <tr>
        <td valign="top"><code>containerClass</code></td>
        <td valign="top">CSS class to be used for container ul</td>
        <td valign="top"><code>string</code></td>
        <td valign="top"><code>pagination</code></td>
    </tr>
    <tr>
        <td valign="top"><code>onClick</code></td>
        <td valign="top">Callback function called every time page is clicked. It receives only one argument - 
        the page number clickec</td>
        <td valign="top"><code>function</code></td>
        <td valign="top"><code>null</code></td>
    </tr>
</table>