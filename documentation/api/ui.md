---
title: Documentation for <code>Ui</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/ui.js">See the app/ui.js file on GitHub</a>
---
# The `Ui` class
<hr>

This class manages some elements of the user interface
and contains methods that are related to it.

You can also check out these classes for further information:

-   Ui.Dialog
-   Ui.Menu
-   Ui.Player
-   Ui.VideoPlayer

<hr>
## loadPartials

Loads the different partials. The skeleton has some
placeholders that are waiting some contents to be
loaded (e.g. sidebar).

**Parameters**

-   `only_sidebar` **\[Bool]** Whether to reload only the
                                   sidebar or not.

Returns **null**

<hr>
## render

Renders content or calls a method given an URI.
There are two possible URI schemes:

-   "controller/action": Controller rendering.
-   "#service/method": Call to a specific service.

### Controller rendering

If a link is referencing a controller/action set, then
this function will extract the controller name from the
h-ref and call the appropriate method on the controller
class.

Before rendering any action, the function first checks
whether the controller is associated to any specific
service and whether the latter is connected or not.

It also don't barely call the specified action; the h-ref
is first given to `Router.to` to match user's preferences.

### Call to a specific service

If the h-ref starts with a sharp (#) then it is considered
as a call to a specific service class so just like for
controller rendering, the service name and method are
extracted from the h-ref and properly delegated.

**Parameters**

-   `href` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The controller/action set
                              or the service/method one.
-   `param` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** An eventual extra param.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**

<hr>
## loading

Shows the loader.

**Parameters**

-   `key` **\[[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** An optional translation key.
-   `context` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** An eventual context to evaluate
                                the translation.

Returns **null**

<hr>
## loaded

Hide the loader.

Returns **null**

<hr>
## loadNextRecords

Function that loads new records once we hit the bottom
of the page.

Returns **null**

<hr>
## share

Puts the media's URL in the clipboard.

**Parameters**

-   `id` **([Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** The media's id.
-   `set`

Returns **null**

<hr>
## tag

Displays a dialog to customize the tags of the file
to download for SoundCloud and YouTube or to change
them for a local file.

**Parameters**

-   `id` **([Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** The media's id.
-   `set`

Returns **null**

<hr>
## downloadStart

Displays a notification about download's beginning
and show the main download bar.

**Parameters**

-   `hash` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A hash containing the media's
                            attributes.

Returns **null**

<hr>
## downloadEnd

Displays a notification about the download's end and
hides the main download bar if necessary.

**Parameters**

-   `hash` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A hash containing the media's
                            attributes.

Returns **null**

<hr>
## downloadProgress

Updates the download bars' progression.

**Parameters**

-   `id` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))** The media's id.
-   `percentage` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The progression.

Returns **null**

<hr>
## hideShadow

Hide the black transparent shadow and its inner element
(i.e. the video player or the dialog box).

Returns **null**

<hr>
## addToPlaylist

Displays a popup to add an element to a playlist.

**Parameters**

-   `id` **([Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** The record's id.

Returns **null**

<hr>
## pageSize

Tries to guess the number of records that should
be loaded on the page.

**Parameters**

-   `kind`

Returns **Bool**

<hr>
## scrollToPlayingElement

Scrolls to the current playing element or playlist.

Returns **null**
