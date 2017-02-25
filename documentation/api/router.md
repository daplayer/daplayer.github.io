---
title: Documentation for <code>Router</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/router.js">See the app/router.js file on GitHub</a>
---
# The `Router` class
<hr>

This class handles the routing, dispatching links to the
proper controler/action when needed.

<hr>
## from

Reversed method of `to` expect for `local/artist` which is
just special cased to make sure that the play icon is shown
at the right place to specify the currently playing action.

soundcloud/{activities,tracks} => soundcloud/stream
local/artist                   => local/artists

**Parameters**

-   `module` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `action` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** -
