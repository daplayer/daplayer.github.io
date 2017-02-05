---
title: Comment télécharger des médias
layout: page
locale: fr
section: documentation
permalink: /fr/documentation/telecharger-medias.html
description: Apprenez à télécharger les fichiers audios et vidéos SoundCloud et YouTube et les différentes options qui sont disponibles.
---

Avant même de commencer à télécharger le média que vous désirez, DaPlayer vous
permet de définir certaines options.

Premièrement, pour télécharger un média, il vous suffit de cliquer sur l'icône
d'options horizontale pour les éléments seuls ( <span class="octicon
octicon-ellipsis"> </span>) et de cliquer ensuite sur l'icône de téléchargement
( <span class="octicon octicon-arrow-down"></span>) ou de cliquer directement
sur l'icone de téléchargement dans le cas d'un élément contenu dans une playlist
ou un album.

> **Note**: Si vous téléchargez des MP3s, que ce soit pour SoundCloud ou pour
> YouTube, les valeurs renseignées dans la boîte de dialogue décrite ci dessous
> seront utilisées comme tags pour le fichier resultant.
>
> Lisez le guide [Utilisation des tags audios](tags-audios.html) pour plus
> d'informations.

## Pour SoundCloud

Une fois que la boît de dialogue est affichée, vous pouvez définir les options
de téléchargement que vous souhaitez. Il est possible de choisir le titre, le
nom de l'artiste, le genre et la pochette.

<div class="soundcloud dialog tag">
  <h2>{{ site.data.app.fr.app.download }}</h2>

  <form>
    <div class="left">
      <img src="https://i1.sndcdn.com/artworks-000169145837-ksfaci-t200x200.jpg">

      <a href="#" class="flat_button">
        {{ site.data.app.fr.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Titre :</label>
      <input type="text" name="title" value="So Clear (feat. Meeka Kates)">

      <label>Artiste :</label>
      <input type="text" name="artist" value="Kraak & Smaak">

      <label>Genre :</label>
      <input type="text" name="genre" value="Electronic">

    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.fr.app.download }}">
  </form>
</div>


## Pour YouTube

La boîte de dialogue de téléchargement pour les médias YouTube est quelques peux
différente si vous essayez de télécharger une vidéo ou un MP3 associé à celle ci.

Si vous choisissez l'option "MP3", la boîte de dialogue va vous permettre de
customiser les champs de la même manière que si vous téléchargiez un MP3 depuis
SoundCloud.

<div class="youtube dialog tag">
  <h2>{{ site.data.app.fr.app.download }}</h2>

  <form>
    <div class="left">
      <img src="https://i.ytimg.com/vi/i_ZYs7Ufajg/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Pca3BlvalRwTPvdLNPlMtG8ri18">

      <a href="#" class="flat_button">
        {{ site.data.app.fr.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Titre :</label>
      <input type="text" name="title" value="Darius - Maliblue">

      <label>Format :</label>

      <input type="radio" value="mp3" name="format" checked> <label>MP3</label>
      <input type="radio" value="video" name="format"> <label>Video</label><br>
    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.fr.app.download }}">
  </form>
</div>

Si vous choisissez l'option "Vidéo", la boîte de dialogue vous laissera simplement
choisir le titre et ce dernier sera utiliser pour donner le nom du fichier resultant.

<div class="youtube dialog tag">
  <h2>{{ site.data.app.fr.app.download }}</h2>

  <form>
    <div class="left">
      <img src="https://i.ytimg.com/vi/mhJh5_6MuCk/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=haY6ogfc1AJXBU-s0qmK9x08Oaw">

      <a href="#" class="flat_button">
        {{ site.data.app.fr.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Titre :</label>
      <input type="text" name="title" value="Slipknot - Killpop">

      <label>Format :</label>

      <input type="radio" value="mp3" name="format"> <label>MP3</label>
      <input type="radio" value="video" name="format" checked> <label>Vidéo</label><br>
    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.fr.app.download }}">
  </form>
</div>
