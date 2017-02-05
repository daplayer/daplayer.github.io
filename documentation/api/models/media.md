---
title: Documentation for <code>Media</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/models/media.js">See the app/models/media.js file on GitHub</a>
---
# The `Media` class
<hr>

**Extends Record**

Generic wrapper for any sort of playable media (i.e. video
or music).

<hr>
## real_artist

Tries to guess the real media's author based upon the title
and the associated account.

    media.title  == 'Maliblue'
    media.artist == 'Darius'
    media.real_artist // => 'Darius'

    media.title  == 'Kartell - Aura'
    media.artist == 'Roche Musique'
    media.real_artist // => 'Kartell'

    media.title  == 'Talk Talk (Moon Boots Remix)'
    media.artist == 'future classic'
    media.real_artist // => 'Moon Boots'

    media.title  == 'Take Care of You'
    media.artist == 'Cherokee (Official)'
    media.real_artist // => 'Cherokee'

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
