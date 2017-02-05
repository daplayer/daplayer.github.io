---
layout: page
title: Download
icon: desktop-download
section: download
description: Download the installer for your system or check for packages for your Linux distribution or how to build the software from source.
permalink: /download/
locale: en
---

DaPlayer tries to be compatible with Windows 7, 8, 8.1 and 10, with Mac OS X (only
tested on Sierra but it should just work on older versions) and with Linux (it
should basically work on any system where Chromium runs).

## Downloads for Windows

DaPlayer should work both on 32-bits and 64-bits Windows systems version 7 and up.

<a href="https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}.exe" class="button">
  <span class="octicon octicon-desktop-download"></span>
  Download for Windows (7, 8, 8.1 or 10)
</a>

I do not own any Windows system so I do not use this piece of software on it. Even
though DaPlayer is tested against Windows on AppVeyor, feel free to report any bug
or provide a patch if you own such system. Thanks !

## Downloads for macOS

DaPlayer should work on macOS 10.9 and greater, it is only tested on Sierra
(10.12) though.

<a href="https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}.dmg" class="button">
  <span class="octicon octicon-desktop-download"></span>
  Download for macOS (10.9 and greater)
</a>

## Downloads for GNU/Linux

If you are a Linux user, different options are available to you. You can either:

* Check whether the software is available through your distro's package
  manager.
* Download the latest version's tar-ball:
  * [x86](https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}_x86.tar.gz)
  * [x64](https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}_x64.tar.gz)
* Or [Build from source](#build-from-source).

DaPlayer should run fine on any X11 environment, at least where Chromium runs
fine. There may be some tiny display glitches; feel free to report them.

### For Debian / Linux Mint / Ubuntu users

You'll need to add a PPA to install DaPlayer:

~~~bash
$ sudo add-apt-repository ppa:daplayer/daplayer
$ sudo apt-get update
$ sudo apt-get install daplayer
~~~

### For Fedora and CentOS users

You'll need to add a specific repository to install DaPlayer through Yum:

~~~bash
$ sudo yum-config-manager --add-repo http://daplayer.github.io/yum
$ sudo yum update
$ sudo yum install daplayer
~~~

### For Arch Linux users

DaPlayer is available through AUR (Arch Users Repository) so you can install
it through Yaourt like:

~~~bash
$ yaourt -S daplayer
~~~

## Build from Source

If you want to build DaPlayer from source because you didn't find any binary
compatible with your platform, checkout the [Contributing](documentation/contributing.html) guide.
