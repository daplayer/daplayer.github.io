---
title: Documentation for <code>Paths</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/paths.js">See the app/paths.js file on GitHub</a>
---
# The `Paths` class
<hr>

Wrapper around the native path modules with some getters
to access common locations.

<hr>
## join

Delegates to `path#join`.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## resolve

Delegates to `path#resolve`.

**Parameters**

-   `location`  

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## root

Path to the project's root.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## home

Path to the user's folder.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## music_folder

Inferred path containing the user's musics.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## user

Path to the user's data folder (e.g. "/home/john/.daplayer").

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## default_artwork

Path to the default artwork image.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## covers

Path to the folder containing cover images.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## artists

Path to the folder containing artist images.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## playlists

Path to the folder containing playlists.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## youtube_history

Path to the "YouTube History" playlist file

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## to_make

List of paths to ensure are created when the application
boots up as we may try to access to them.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

<hr>
## exists

Check whether a given path exists or not.

`Paths.exists('user')` will return true only if
`Paths.user` exists on the file system.

`Paths.exists('/home/jacky/foo.mp3')` will return true
if the file exists on system.

**Parameters**

-   `location` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The getter to call or a
                                full path.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

<hr>
## mkdir

Creates a new directory getting the wanted path
delegating to the given getter's name.

`Paths.mkdir('user')` will create the `Paths.user`
folder.

We are relying on the synchronous counter-part of
`mkdir` since we want to block the event loop
creating folders.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The getter to call.

Returns **null** 

<hr>
## touchYouTubeHistory

Touches the JSPF file for the YouTube history.

We are not relying on the `LocalModel#savePlaylist` method
as this would do extra computation to guess the file name
and we want to save this file synchronously to avoid race
conditions plus we don't have to require anything else
apart from this file in the `main.js` one.

Returns **null** 

<hr>
## for

Returns the exact file's path to store a
file that's going to be downloaded based on
the title, the artist and the service.

**Parameters**

-   `title` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The media's title.
-   `artist` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The media's artist.
-   `service` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The download service.
-   `extension` **\[[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** The file's extension.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
