---
title: Documentation for <code>Analytics</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/analytics.js">See the app/analytics.js file on GitHub</a>
---
# The `Analytics` class
<hr>

Class responsible for managing the listening analytics
inside the application.

IndexedDB is used under the hood, checkout the `Database`
class for further information. There's a table for each
service (i.e. soundcloud, youtube, local).

The data are stored as JSON objects with an `id` and
`playback_count` field. For instance:

    {id: '/path/to/file.mp3', playback_count: 5}

<hr>
## increase

Increases the playback count value of a record inside
the database.

**Parameters**

-   `record` **Media** The concerned record.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

<hr>
## store

Stores a brand new entry in the analytics database.

**Parameters**

-   `record` **Media** The record to add.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 
