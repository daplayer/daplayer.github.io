---
title: Documentation for <code>Html</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/html.js">See the app/html.js file on GitHub</a>
---
# The `Html` class
<hr>

Class responsible for generating HTML strings that will
be rendered to the user.

<hr>
## tag

Generates an HTML tag. For instance:

    Html.tag('a', { href: 'meta/index'}, 'Home page')
    // => '<a href="meta/index">Home page</a>'
    Html.tag('img', { src: 'foo.png'})
    // => '<img src="foo.png">'
    Html.tag('div', 'box', () => { return "Hello world"})
    // => '<div class="box">Hello world</div>'

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `attributes` **([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** 
-   `content` **\[([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function))]** 

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## options

Returns the necessary mark-up to display a media's options
for sharing, downloading, tagging or adding a media to
a playlist.

**Parameters**

-   `service` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The record's service.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## glyphicon

Returns a `span` having the proper Glyphicon's class.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The glyph name.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
