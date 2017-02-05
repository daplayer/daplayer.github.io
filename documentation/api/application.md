---
title: Documentation for <code>Application</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/application.js">See the app/application.js file on GitHub</a>
---
# The `Application` class
<hr>

This class manages some application logic.

<hr>
## boot

Handles all the necessary initializations and loads
before the application can properly boot-up (i.e.
register all its event handlers).

**Parameters**

-   `on_ready` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The function to call once
                                  the application is ready.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 
