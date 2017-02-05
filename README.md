# DaPlayer's website

This repository contains the markup of [DaPlayer's website](http://daplayer.github.io).
It is written in Markdown and uses Jekyll to generate the pages.

## Contributing

If you want to fix something in the documentation or improve styling or whatever,
you just need to clone this repository:

~~~
$ git clone https://github.com/daplayer/daplayer.github.io
~~~

Then, you just need to install the different dependencies and run the server:

~~~
$ bundle
$ bundle exec jekyll server
~~~

## Managing translations

To ensure consistency between labels inside DaPlayer and the documentation, the
translations stored in [daplayer/i18n](https://github.com/daplayer/i18n) are
imported as Jekyll [data files](https://jekyllrb.com/docs/datafiles/).

To synchronize the translations with the current ones, just run:

~~~
$ rake sync:i18n
~~~

## Generating the API

The site lets users browse the API documentation for classes stored under the
`app` folder inside the main repository. To update the API, you need to have
a local copy of DaPlayer and then run:

~~~
$ SOURCE=/path/to/daplayer rake sync:api
~~~
