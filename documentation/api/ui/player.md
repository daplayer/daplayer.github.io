---
title: Documentation for <code>Player</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/ui/player.js">See the app/ui/player.js file on GitHub</a>
---
# The `Ui.Player` class
<hr>

This class manages the player's user interface.

<hr>
## pauseButton

Changes the appearance of the play/pause button to have
a play icon.

Returns **null** 

<hr>
## playButton

Changes the appearance of the play/pause button to have
a pause icon.

Returns **null** 

<hr>
## setupInterface

Utility method to correctly setup the different pieces
of the player's interface when we are playing a media
like setting the elements' color, display the media's
information, etc.

Returns **null** 

<hr>
## progression

Displays the current progression of the media by
updating the current time and setting the progress bar
width and the position of the circle cursor.

This method can be interrupted by setting the value of
the Player's `auto_progression` value to `false`.

**Parameters**

-   `time` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The current time.
-   `bypass` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** By-pass the `auto_progression`
    check to force update.

Returns **null** 

<hr>
## buffered

Updates the width of the buffer bar.

**Parameters**

-   `time` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The number of seconds buffered.

Returns **null** 

<hr>
## setVolume

Updates the volume bar's height and sets the right
volume icon.

**Parameters**

-   `volume` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The chosen volume.

Returns **null** 

<hr>
## toggleRepeat

Toggles the active state of the repeat icon.

Returns **null** 

<hr>
## showCurrentSet

Displays the current set's icon and copies its items.

Returns **null** 

<hr>
## hideCurrentSet

Hides the current set's icon and clears its items.

Returns **null** 

<hr>
## currentSetMode

Toggles the playing mode for the current set.

**Parameters**

-   `previous` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Previous queuing mode.
-   `wanted` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The new queuing mode.

Returns **null** 

<hr>
## showLoader

Shows the loader for the current media; this is triggered
when the media is loading (only for SoundCloud and Youtube).

Returns **null** 

<hr>
## hideLoader

Hides the loader for the current media.

Returns **null** 

<hr>
## reset

Short hand to reset the progress bar.

Returns **null** 
