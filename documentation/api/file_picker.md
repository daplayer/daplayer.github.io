---
title: Documentation for <code>FilePicker</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/file_picker.js">See the app/file_picker.js file on GitHub</a>
---
# The `FilePicker` class
<hr>

Wrapper around Electron's dialog to choose files that are
stored on disk.

<hr>
## open

Opens up a dialog to pick a file or a directory.

If the `kind` argument is 'directory', then the user
can only pick a directory. If the `kind` argument is
'picture', then the user can only pick a single file
which has either the `.jpeg`, `.jpg` or `.png` extension.

**Parameters**

-   `kind` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The kind of dialog to open.
-   `callback` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** The callback to call once the
                                 file/folder has been chosen.

Returns **null** 
