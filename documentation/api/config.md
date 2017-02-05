---
title: Documentation for <code>Config</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/config.js">See the app/config.js file on GitHub</a>
---
# The `Config` class
<hr>

Wrapper around the local storage to manage the user
configuration.

Configuration settings are stored on a per service
basis under a service_config key (e.g. `local_config`).

<hr>
## meta

Returns the configuration for the meta section.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## local

Returns the configuration for the local section.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## soundcloud

Returns the configuration for the SoundCloud section.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## youtube

Returns the configuration for the YouTube section.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## default

Contains the default configuration settings for all
the services.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## read

Reads the configuration setting of a given section reading
from the local storage or return the default value if unset.

**Parameters**

-   `section` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The section to look in.
-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The setting key.

Returns **([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))** 

<hr>
## store

Stores a given configuration setting in the local storage
making sure that we don't erase the previous values.

**Parameters**

-   `section` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The section to write to.
-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The setting key.
-   `value` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The value to set.

Returns **null** 
