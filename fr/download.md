---
title: Téléchargement
layout: page
locale: fr
section: download
description: Téléchargez le programme d'installation pour votre système d'exploitation ou regadez pour un paquet pour votre distribution Linux.
permalink: /fr/telechargement/
---

DaPlayer essaye d'être compatible avec Windows 7, 8, 8.1 et 10, avec macOS (il
est uniquement testé sur Sierra mais devrait fonctionner avec des versions
antérieures) et avec GNU/Linux (il devrait fonctionner sur n'importe quel
système où Chromium fonctionne).

## Télécharger pour Windows

DaPlayer devrait fonctionner sur les systèmes Windows 32-bits ou 64-bits (version 7
et supérieures).

<a href="https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}.exe" class="button">
  <span class="octicon octicon-desktop-download"></span>
  Télécharger pour Windows (7, 8, 8.1 or 10)
</a>

Je ne possède pas de système Windows donc par conséquent, je n'utilise pas ce
programme sur cette plateform. N'hésitez pas [à
reporter](https://github.com/daplayer/daplayer/issues/new) les bugs et anomalies
que vous pourriez rencontrer ou à proposer un patch pour corriger le problème.
Merci !

## Télécharger pour macOS

DaPlayer devrait fonctionner sur macOS (version 10.9 et supérieures) ; il est
uniquement testé sur Sierra cependant.

<a href="https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}.dmg" class="button">
  <span class="octicon octicon-desktop-download"></span>
  Télécharger pour macOS (10.9 and greater)
</a>

## Télécharger pour GNU/Linux

Si vous êtes un utilisateur de Linux, différentes options sont possibles. Vous
pouvez :

* Regarder si un paquet est disponible *via* le gestionnaire de paquet
  de votre distribution (voir ci-dessous).
* Télécharger l'archive de la dernière version :
  * [x86](https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}_x86.tar.gz)
  * [x64](https://github.com/daplayer/daplayer/releases/download/v{{ site.version }}_x64.tar.gz)
* Ou [utiliser les sources](#utiliser-les-sources).

DaPlayer doit tourner correctement dans un environnement X11, en tous cas
n'importe où où Chromium fonctionne. Il se peut qu'il y est des petits
bugs d'affichage, n'hésitez pas à les signaler.

### Pour Debian / Linux Mint / Ubuntu

Il vous suffit d'ajouter le PPA suivant pour installer DaPlayer :

~~~bash
$ sudo add-apt-repository ppa:daplayer/daplayer
$ sudo apt-get update
$ sudo apt-get install daplayer
~~~

### Pour Fedora et CentOS

Il vous suffit d'ajouter le dépôt suivant pour installer DaPlayer *via* Yum :

~~~bash
$ sudo yum-config-manager --add-repo http://daplayer.github.io/yum
$ sudo yum update
$ sudo yum install daplayer
~~~

### Pour Arch Linux

DaPlayer est disponible sur AUR (*Arch Users Repository*), vous pouvez donc
l'installer via Yaourt comme ceci :

~~~bash
$ yaourt -S daplayer
~~~

## Utiliser les sources

Si vous voulez utiliser le code source de DaPlayer pour l'installer sur votre
machine, vous pouvez regarder [le guide pour
contribuer](/documentation/contributing.html) (en anglais) pour plus d'informations.
