---
title: Coding conventions
layout: page
locale: en
section: documentation
description: Here are the different coding conventions that are used inside DaPlayer's code base.
---

## JavaScript

General conventions:

* Use string interpolation through `Foo ${bar}` rather than concatenation.
* Avoid curly braces if the `if` **and** `else` bodies are just one-line.
* Use the rocket syntax (i.e. `(name) => {}`) inside regular JavaScript files
  and use the classical syntax (i.e. `function(name) {}`) manipulating the
  DOM.
* Use when possible the one-line syntax for rocket functions. For example:
  ~~~javascript
  array.map(param => param.name);
  ~~~
* Prefer single quoted strings.
* Try to "equal-align" variable names like:
  ~~~javascript
  var foo  = "bar";
  var quux = "baz";
  ~~~

Naming conventions:

* Method and class names are camelCased.
* Getters are snake_cased
* Variables inside methods are snake_cased.
* File names are snake_cased.

Documentation:

* Methods should be documented in English with the different parameters,
  their types and the return type. If the function returns nothing, by
  default, set a `@return {null}`.
* Documentation lines should be wrapped around 60-65 chars.
* Present tence should be used to describe a method's behavior (e.g.
  Delegates to ...)
* Try to use as much as possible gender-less pronouns. If the documentation
  talks about something which is owned by the user, use "their" rather than
  "his" or "her".

## LESS

[LESS](http://lesscss.org) is used as the CSS pre-processor. Stylesheets are
stored under the `assets/stylesheets` folder and are stored like this:

* `base/` contains the basic components like mixins or classes that are
  too-generic to have their own file (e.g. `.clearer`).
* `components/` contains a file for each component in the application.
* `layout/` contains layour-specific rules.
* `default_theme.less` is the file that will be required in the index
  page; it loads all the partials and defines all the variables.

Here are some rules that applies to all files:

* File names are based on the name of the CSS class they store.
* Variables are defined inside the `default_theme.less`, under all `@import`
  statements (possible since variables are lazy loaded by LESS).
* Variables are kebab-cased.

Here are some rules that applies to class definitions:

* Rules are defined in alphabetical order except `width` that should be
  next to `height` and some rulesets (like positionning for instance).
  For example:

  ~~~scss
  .class {
    background: red;
    height: 30px;
    width: 150px;
    line-height: 40px;
    position: absolute;
    left: 60px;
    top: 10px;
  }
  ~~~

  This prevents duplicates and it's easier to read, like we are reading
  things by "group" (e.g. the "dimension" group, the "positionning" group)
* If a rule is just a single line, you can in-line it:
  ~~~scss
  .class { height: 100%; }
  ~~~
