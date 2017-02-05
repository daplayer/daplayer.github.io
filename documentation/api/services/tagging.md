---
title: Documentation for <code>Tagging</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/services/tagging.js">See the app/services/tagging.js file on GitHub</a>
---
# The `Tagging` class
<hr>

Wrapper around our tagging library.

<hr>
## define

Defines the tag of a given media or file location.

If an instance of `Media` is given, its id is taken
to update the audio tags on the file system and its
properties are properly update.

If a file location is given, the tags are properly
updated on the file system.

**Parameters**

-   `location` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `tags` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **null** 

<hr>
## extract

Extracts the audio tags of all files contained inside
a given folder location and cache them on the file
system to make reading a folder faster it has already
been processed once.

**Parameters**

-   `location` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The folder location.
-   `callback` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Callback to call each time
                                  an audio file has been read.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

<hr>
## loadLibrary

Loads the library files (i.e. the hash and the files array).
It relies on the `file_names` and `library_file` getters to
determine which files should be read.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

<hr>
## hash

Returns a SHA-1 version of the user's music folder path.

This is handy as it always generate the same output with
the same string and we don't have to handle OS specific
disparities (like slash on \*nix and and back-slash on
Windows).

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## library_file

Returns the absolute path to the JSON file containing
the already-computed music library.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## file_names

Returns the absolute path to the JSON file containing
the already-computed music files.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
