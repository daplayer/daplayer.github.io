---
title: Documentation for <code>Context</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/models/context.js">See the app/models/context.js file on GitHub</a>
---
# The `Context` class
<hr>

This class represents a view's context.

It has an associated collection which is just a flat array
to easily deal with the playing queue.

This is because when we are on an artist's page for instance,
if we are playing the last track of the last album, the user
would certainly expect the singles to be read next to this
track but since tracks are nested inside the album, it's
hard to go back to the root level to play these singles.
