---
title: Contributing
layout: page
locale: en
section: documentation
description: A quick tour to guide you through the process of writing patches for your personal needs or to contribute back to DaPlayer.
---

> **Note**: This document will guide you through the process of contributing
> to DaPlayer's code base. However, it just concerns the main repository (i.e.
> the player's interface and logic).
>
> If you are willing to work on translations or the tagging system, please
> checkout these projects:
>
> * [daplayer/i18n](https://github.com/daplayer/i18n)
> * [daplayer/tagging](https://github.com/daplayer/tagging)

DaPlayer is an open source piece of software which is released under the AGPL-3.0
license. If you don't want to read the [whole license](http://choosealicense.com/licenses/agpl-3.0/),
in a nutshell, it means that you can edit the source code for your personal needs
but if you distribute the software, you need to make the source code available
even if you use the code for a web application/service.

<div class="flash-error">
  <strong>Warning</strong>: Maintaining open source softwares is hard !
  Unfortunately, I can't guarantee you that your feature will be accepted because
  of a lot of reasons including :

  <ul>
    <li>Maintenance cost</li>
    <li>Consistency</li>
    <li>Usability</li>
    <li>Specificness</li>
  </ul>

  Thus, feel free to <a href="https://github.com/daplayer/daplayer/issues/new">open
  a ticket</a> on the tracker to discuss about your feature first ! ❤️
</div>

## Software Requirements

To be able to write a patch or improve something in DaPlayer, you should have
the following installed on your computer:

* Node (v6.3+)
* [Yarn](https://yarnpkg.io)
* A C++ compiler (GCC or Clang)
* Make
* Git

## Knowledge Requirements

This document will guide you throughout the process of creating a patch for
DaPlayer but you'll need to have certain knowledges to be able to do so.
You should be able to:

* Work with HTML & CSS (LESS)
* Write JavaScript (ECMAScript 2015) code
  - Having knowledge of asynchronous execution
  - and being able to use Promises (all the code rely on them).

## Clone the Git repository

The source code of the project is available on GitHub:

~~~bash
$ git clone https://github.com/daplayer/daplayer
$ cd daplayer
~~~

Then you can install the dependencies:

~~~bash
$ make install
~~~

You can run the application with:

~~~bash
$ yarn start
~~~

Then, you can create a new Git branch to host your changes and check it out:

~~~bash
$ git checkout -b my-new-feature
~~~

## The folder structure

DaPlayer is written with vanilla JavaScript which implies that it has a pretty
peculiar folder structure.

### The `main.js` file

This project is based on [Electron](http://electron.atom.io/). This file is the
entry point of the application. It requires the different Electron APIs and then
load the index page. The software is just a Single Page Application; everything
happens on the same page but anytime a link is clicked, we just change the
content of the page to display the requested content.

### The `index.html` file

This file simply contains the application's skeleton; the JavaScript entry
point is the `assets/javascripts/bootstrap.js` file that handles a lot of
things when the application boots up. The different sections (e.g. the sidebar)
are filled in through the `Ui#loadPartials` function.

### The `app/` folder

The `app/` folder contains some folders:

| Folder     | Description                                          |
| ---------- | ---------------------------------------------------- |
| base/      | Contains some base classes extended elsewhere.       |
| services/  | Contains services used application-wide.             |
| ui/        | Contains classes representing a specific UI section. |
| views/     | Partials used application-wide.                      |

This folder also contains some common classes that can be useful throughout
the application:

<table>
  <tr>
    <th>File</th>
    <th>Description</th>
  </tr>

  <tr>
    <td>analytics.js</td>
    <td>Handles analytics inside the application</td>
  </tr>

  <tr>
    <td>application.js</td>
    <td>Application wide logic; dead simple at the moment</td>
  </tr>

  <tr>
    <td>cache.js</td>
    <td>Static class managing caching.</td>
  </tr>

  <tr>
    <td>config.js</td>
    <td>Static class managing the user's configuration (mostly a wrapper around `localStorage`).</td>
  </tr>

  <tr>
    <td>core_ext.js</td>
    <td>
      Contains some extensions for native object's prototype like
      <code>String#includes</code> or <code>Array#first</code>.
    </td>
  </tr>

  <tr>
    <td>credentials.js</td>
    <td>
      Class managing all the credentials (i.e. the registered applications'
      credentials for SoundCloud and YouTube and the user's ones).
    </td>
  </tr>

  <tr>
    <td>database.js</td>
    <td>
      A wrapper arround indexedDB (used to store analytics).
    </td>
  </tr>

  <tr>
    <td>downloads.js</td>
    <td>Class that globally manages the downloads.</td>
  </tr>

  <tr>
    <td>file_picker.js</td>
    <td>
      Wrapper around the Electron's dialog API ; dead simple at the moment.
    </td>
  </tr>

  <tr>
    <td>helpers.js</td>
    <td>Handlebars helpers used application-wide.</td>
  </tr>

  <tr>
    <td>html.js</td>
    <td>Utility class to generate HTML tags.</td>
  </tr>

  <tr>
    <td>initializer.js</td>
    <td>File that loads most of our dependencies and objects.</td>
  </tr>

  <tr>
    <td>jquery_ext.js</td>
    <td>Some jQuery extensions to simplify the code.</td>
  </tr>

  <tr>
    <td>mappers.js</td>
    <td>Glob constant shortcuts (e.g. <code>Service.for('soundcloud')</code></td>
  </tr>

  <tr>
    <td>menu.js</td>
    <td>File that sets the application's menu (using the Electron API).</td>
  </tr>

  <tr>
    <td>notification.js</td>
    <td>Tiny class that manages notifications inside and outside the application.</td>
  </tr>

  <tr>
    <td>paths.js</td>
    <td>Static class to deal with paths.</td>
  </tr>

  <tr>
    <td>player.js</td>
    <td>Static class managing the player logic.</td>
  </tr>

  <tr>
    <td>queue.js</td>
    <td>Static class managing the playing queue.</td>
  </tr>

  <tr>
    <td>router.js</td>
    <td>Router class to correctly dispatch some h-refs.</td>
  </tr>

  <tr>
    <td>sub_window.js</td>
    <td>
      Wrapper around Electron's `BrowserWindow` to manage sub windows inside
      the application.
    </td>
  </tr>

  <tr>
    <td>timing.js</td>
    <td>Timing related functions.</td>
  </tr>

  <tr>
    <td>ui.js</td>
    <td>
      Tote bag for common user-interface-related actions (e.g. display a
      loader waiting for data to be loaded).
    </td>
  </tr>

  <tr>
    <td>view.js</td>
    <td>Static class that compiles and renders HandleBars views.</td>
  </tr>
</table>

### The `assets/` folder

The assets folder is composed of 5 different sub-folders:

| Folder       | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| fonts/       | The fonts used in the application.                            |
| icons/       | The application's icons.                                      |
| images/      | The images used inside the application.                       |
| javascripts/ | Contains `bootstrap.js` which is defining our event handlers. |
| stylesheets/ | All the LESS stylesheets.                                     |

### Module's folder structure

Each module (i.e. `local`, `meta`, `soundcloud`, `youtube`) is stored in
its own folder but these folders all have the same structure which is
basically a classic MVC (Model-View-Controller) pattern.

|  File         | Description                      |
| ------------- | -------------------------------- |
| models/       | Mixins of the model stack.       |
| views/        | Contains the HandleBars views.   |
| client.js     | Abstraction class to deal with API calls (SoundCloud and YouTube only). |
| controller.js | The controller class which contains actions. Each action roughly load data from the model and render a view passing the data. |
| helpers.js    | HandleBars helpers that are used inside the views (most of them are facilities to render partials). |
| model.js      | Abstraction class to fetch data (either tied to a service or the file system). |
| player.js     | Handles callback registration for the service's medias. |
| service.js    | Abstraction class to manage connection, authorization and some stuff specific to the service (e.g. downloading). |

### The `test/` folder

This folder contains different sub-folders that all contains tests for different
parts of the software.

* `test/helpers`: to test HandleBars helpers.
* `test/integration`: to test the correctness of a feature at the user level.
* `test/models`: to test model-specific logic.
* `test/unit`: to test classes stored under `app/`.
* `test/views`: some integrity tests for the views to ensure that we aren't
  using missing stuff. You normally shouldn't care about this folder.

Tests are run through Mocha; to write a test, you just need to tell Mocha which
object/feature you are testing with the `describe` function and describe what each
test is doing by passing a string to the `it` function. For instance:

~~~javascript
require('../test_helper');

describe('MyAwesomeClass', () => {
  describe('#method', () => {
    it('should be awesome', () => {
      assert(MyAwesomeClass.isAwesome());
    });
  });
});
~~~

## Next Step

Now that you have a local copy of the source code and that you know how it is
organized, you can go ahead and do a change to the code base like fixing a bug
or adding a feature that you want !

## Sending a Pull Request

If you are willing to send a pull request to make your change available directly
in DaPlayer, you'll need to make sure that your patch is looking good and that
all the tests are passing. To run the tests, you can run:

~~~bash
$ make test
~~~

Then, if everything is fine, you should commit your changes in Git:

~~~bash
$ git add .
$ git commit
~~~

Make sure that you wrote a [good commit message](http://chris.beams.io/posts/git-commit/), then you can fork DaPlayer on GitHub and change the remote source
of the repository to your fork, then push your changes:

~~~bash
$ git remote remove origin
$ git remote add origin https://github.com/[Your GitHub handle]/daplayer
$ git push origin my-new-feature
~~~

Finally, open your GitHub repository in the browser and click on the
"Create Pull Request" link.
