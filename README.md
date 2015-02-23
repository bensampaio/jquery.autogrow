# jQuery Plugin - AutoGrow Textarea
===================================

## Description

This plugin allows a textarea field to grow vertically with its content. To achieve that, a div element is created with exactly the same styles as the textarea and it is placed after it, but hidden. This div is then used as a mirror of the textarea. This is, each time the user types something, the textarea content is passed to the mirror element and it is then used to calculate the textarea height.

## Test it!

Check the [plugin page](http://bensampaio.github.io/jquery.autogrow) if you want to check how it works first.

## Installation

Install using bower by running the following command:

`$ bower install jquery-autogrow-textarea --save`

Or, just clone it.

## Usage

Include the CSS file on the head of your page by adding the following:

```html
<link type="text/css" href="/path/to/bower/jquery-autogrow-textarea/dist/jquery.autogrow.min.css" rel="stylesheet">
```

Alternatively, you can also add the content of this file to your own CSS files.

Include the minified JS file on the head or body of your page by adding the folllowing:

```html
<script type="text/javascript" src="/path/to/bower/jquery-autogrow-textarea/dist/jquery.autogrow.min.js"></script>
```

Make sure the script is loaded after jQuery.

Initialize it as follows:

```javascript
$('textarea').autogrow()
```

## Options

You can also initialize it with the following options:

- id: the id attribute to add to the mirror element;
- classes: the classes to add to the mirror element;

Example:

```javascript
$('textarea').autogrow({ id : 'my-textarea-mirror', classes : 'special-textarea-mirror' })
```

**Note**: If there is more then one element on the jQuery collection a index will be appended to the id attribute.

## Events

If your textarea styles change you can trigger the 'autogrow.resize' event to correct the mirror styles as follows:

```javascript
$('textarea').trigger('autogrow.resize')
```
