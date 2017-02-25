---
title: Documentation for <code>Timing</code>
layout: page
locale: en
section: documentation
description: <span class="octicon octicon-mark-github"></span> <a href="https://github.com/daplayer/daplayer/tree/master/app/timing.js">See the app/timing.js file on GitHub</a>
---
# The `Timing` class
<hr>

This class contains some common functions that are related
to timing.

<hr>
## time

Converts the given number of seconds to a human readable
string like "hours:minutes:seconds".

**Parameters**

-   `duration` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The number of seconds.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## fromISO8601

Returns a total duration in seconds given an ISO 8601
time string.

**Parameters**

-   `string` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The timing string.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

<hr>
## relativeTime

Returns a human readable sentence to represent the
elapsed time since the given timestamp.

**Parameters**

-   `timestamp` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

<hr>
## currentTimestamp

Returns the current timestamp in seconds.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
