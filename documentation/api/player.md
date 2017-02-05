---
title: Documentation for <code>Player</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/player.js">See the app/player.js file on GitHub</a>
---
# The `Player` class
<hr>

This class is responsible for managing the playing logic
inside the application.

The user interface is managed by the `Ui.Player` class.

<hr>
## initialize

Initializes all the necessary elements for audio analysis.
These ones should be instantiated just once.

Returns **null** 

<hr>
## preload

Finds the record to play in the cache. Once the record
is found, delegates to the `start` method.

**Parameters**

-   `id` **([Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** The element to play's id.
-   `playlist` **([Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** Optionally the current
                                          playlist.
-   `keep_action` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Whether to keep the
                                          playing action or not.

Returns **null** 

<hr>
## start

Starts the player for a given record.

**Parameters**

-   `record` **Media** The record to play.

Returns **null** 

<hr>
## stop

Short-hand to pause the current playing media and reset
the player interface.

Returns **null** 

<hr>
## play

Facility to play the current media instance. It just
delegates to the instance's `play` method and change
the class of the pause button.

Returns **null** 

<hr>
## playNext

Plays the next media.

Returns **null** 

<hr>
## playPrevious

Plays the previous media unless the current media's time
is greater than 5 seconds; in this case, we just rewind
it.

Returns **null** 

<hr>
## pause

Ditto `play` but for pausing.

Returns **null** 

<hr>
## goTo

Seeks the current media to the given percentage of time
and update the position of the progress bar accordingly.

**Parameters**

-   `seconds` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The duration to go to.

Returns **null** 

<hr>
## setVolume

Delegates to the instance's `setVolume` method and
updates the volume bar. Also stores the current
volume in the user's configuration.

**Parameters**

-   `volume` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The volume between 0 and 1.
-   `skip_config` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Whether to save the volume
                                     in the configuration or not.

Returns **null** 

<hr>
## toggleMute

Mutes or unmutes the current volume.

Returns **null** 

<hr>
## toggleRepeat

Toggles the repeat mode for the current playing media.

Returns **null** 

<hr>
## currentSetMode

Changes the playing mode for the current set.

**Parameters**

-   `mode` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The playing mode for the current set.

Returns **null** 

<hr>
## sample

Returns a random value from the array returned by the
audio context's `getByteFrequencyData` method.

This method is used to give an idea of the height of
the equalizer bars.

Returns **Float** 

<hr>
## paused

Returns whether the player is paused or not.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

<hr>
## media

Sorthand to access the current playing media based
upon the record's kind.

Returns **HTMLMediaElement** 
