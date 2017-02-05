---
title: Documentation for <code>SubWindow</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/sub_window.js">See the app/sub_window.js file on GitHub</a>
---
# The `SubWindow` class
<hr>

This class is a wrapper around the Electron's `BrowserWindow`
API to create windows within the application.

<hr>
## constructor

Creates a new sub-window.

**Parameters**

-   `width` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The window's width.
-   `height` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The window's height.

<hr>
## load

Loads the given URL (delegates to BrowserWindow#load).

**Parameters**

-   `url` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The URL to load.

Returns **null** 

<hr>
## show

Delegates to BrowserWindow#show.

Returns **null** 

<hr>
## on

Registers a specific event handler. Simply delegates to
the window's webcontents' `on` method.

`"redirect"` can be passed as a short-hand for the
`"did-get-redirect-request"` event.

**Parameters**

-   `event` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The event to listen.
-   `callback` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The function to trigger when
                                  the event happens.

Returns **null** 

<hr>
## close

Delegates to BrowserWindow#close.

**Parameters**

-   `avoid_refresh` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Whether to avoid the
                                       refresh or not closing.

Returns **null** 

<hr>
## isDestroyed

Short-hand to check whether the window is destroyed or
not. This automatically returns true if the window is
null.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

<hr>
## webContents

Returns the window's webContents.

Returns **WebContents** 
