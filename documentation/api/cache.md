---
title: Documentation for <code>Cache</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/cache.js">See the app/cache.js file on GitHub</a>
---
# The `Cache` class
<hr>

This class is responsible for all the caching inside the
application.

This is mostly just a big hash which is clever enough
to set some default values and deal with paginated contents.

<hr>
## initialize

Initializes the different pieces of the cache to make
sure that we are dealing with empty objects and not
`undefined` for the first checks.

Returns **null** 

<hr>
## add

Facility to add elements to a specific cache section.

When the section is empty, the given data is roughly stored.

When the section is already filled, the existing collection
will be concatenated with the given one and the cursor to
the next data page will be updated as well.

**Parameters**

-   `module` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The module identifier; i.e.
                               the root section.
-   `section` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The section to fill.
-   `data` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The data to store.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

<hr>
## fetch

Wraps cache sections within a Promise object. This
is a facility to return data inside a Promise since
model methods return such kind of objects.

**Parameters**

-   `module` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The wanted module.
-   `section` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The wanted section.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 
