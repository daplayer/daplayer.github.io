---
title: Documentation for <code>ArtistArts</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/services/artist_arts.js">See the app/services/artist_arts.js file on GitHub</a>
---
# The `ArtistArts` class
<hr>

**Extends NetService**

Service tied to the Spotify API that is able to fetch
artist's images and store them on disk to display a
nice local library.

<hr>
## fetch

Fetches an image for a given artist name looking on
the Spotify API.

**Parameters**

-   `artist` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The artist's name.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

<hr>
## fetchArtists

Fetches all the arts of a given collection of artists
and display them on the page if needed.

**Parameters**

-   `artists` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The collection of artists.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

<hr>
## arts

Returns a mapping of the images stored inside the artist
arts folder.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## setArtistArt

Store an artist's art inside the local storage.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The artist's name.
-   `present` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether the icon is on disk or not.

Returns **null** 
