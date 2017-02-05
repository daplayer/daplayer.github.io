---
title: Documentation for <code>Credentials</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/credentials.js">See the app/credentials.js file on GitHub</a>
---
# The `Credentials` class
<hr>

This class manages the credentials used inside the
application.

It deal both with API credentials and the user's one.
The API ones are hard stored in this file and the
user's one are managed through `localStorage`.

<hr>
## soundcloud

Returns the API credentials for SoundCloud.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## youtube

Returns the API credentials for YouTube.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## user

Returns the user's credentials for both SoundCloud
and YouTube.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## read

Read the user's credentials for a given service
in the local storage or read from the default hash
if the former isn't set.

**Parameters**

-   `service` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The wanted service.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## default

Default credentials values.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## store

Stores the given credentials for a service in the local
storage.

**Parameters**

-   `service` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The concerned service.
-   `credentials` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))** The credentials.

Returns **null** 

<hr>
## remove

Removes a service's credentials from the local storage.
Used when signing out from SoundCloud or YouTube.

**Parameters**

-   `service` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The concerned service.

Returns **null** 
