---
title: Documentation for <code>Controller</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/base/controller.js">See the app/base/controller.js file on GitHub</a>
---
# The `Controller` class
<hr>

Abstract representation of a controller. It brings the
basic rendering logic.

<hr>
## render

Delegates to the given module's controller and action.

**Parameters**

-   `view` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The view's path.
-   `context` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The view's context.
-   `id` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** An eventual attached id.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 
