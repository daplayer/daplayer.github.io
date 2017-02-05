---
title: Documentation for <code>View</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/view.js">See the app/view.js file on GitHub</a>
---
# The `View` class
<hr>

This class is a sort of black-box managing views inside
the application. It relies on both Handlebars (to generate
the HTML from .hbs files) and jQuery to inject the results
inside the DOM.

<hr>
## render

Fills the current page with the result of the template
compilation.

**Parameters**

-   `location` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The template's location.
-   `context` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The template's context.

Returns **null** 

<hr>
## append

Appends the result of the template compilation to the
current page.

The process is stopped if the current action doesn't
match with the requested template. Thus, if an action
takes too long to load data and the user has clicked
on a different one, they won't have elements of the
former shown.

**Parameters**

-   `location` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The template's location.
-   `context` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The template's context.

Returns **null** 

<hr>
## compile

Compiles a template through Handlebars. If the template's
already been compiled, we just read it from the cache.

**Parameters**

-   `location` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The template's location.

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** 

<hr>
## partial

Facility to define partials as Handlebars helpers. It
compiles the given partial, render it and wrap inside
a Handlebars safe string.

**Parameters**

-   `location` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The partial's location.
-   `context` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The context for rendering.

Returns **Handlebars.SafeString** 
