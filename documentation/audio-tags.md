---
title: Using audio tags
layout: page
locale: en
section: documentation
description: Learn how does audio tagging works and how you can customize tags to have the proper meta-data on any of your device.
---

Audio tags aren't a feature specific to DaPlayer at all. They are standardized
according to the file audio's format (e.g. MP3 has ID3 tagging, Ogg has Vorbis
tagging, etc.).

Tagging allows you to customize the meta-data associated to an audio file. The
different tagging formats all have their specific features but to be consistent
across them, DaPlayer allows you to customize the following fields:

* The title
* The artist
* The genre
* The album
* And the cover at

At the moment, DaPlayer supports tagging for the following formats:

| Format | Basic tags | Cover art |
|:------:|:----------:|:---------:|
| MP3    |  &#10004;  |  &#10004; |
| Wav    |  &#10004;  |  &#10004; |
| M4A/AAC|  &#10004;  |  &#10004; |
| Ogg    |  &#10004;  |  &#10008; |

## Customize tag during downloading

Audio tags can be customized when you try to download a SoundCloud or YouTube
audio file. See the [How to download medias](download-medias.html) page for
further information.

## Customize local files tag

If you want to customize the audio tags of a file stored on your computer,
first make sure that it is stored inside the music folder you specified
inside the configuration.

### On a single file basis

The go to the "Local files" section on the sidebar and either pick a file that
is in your singles collection or on an artist page.

Click on the vertical-options icon if you are trying to tag a single, otherwise
click on the horizontal-options if you are trying to tag a track from an album.

Then a dialog with the different tagging options will be displayed:

<div class="local dialog tag">
  <h2>{{ site.data.app.en.app.tag }}</h2>

  <form>
    <div class="left">
      <img src="/documentation/images/alive_cover.jpeg">

      <a href="#" class="flat_button">
        {{ site.data.app.en.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Title :</label>
      <input type="text" name="title" value="One More Time / Aerodynamic">

      <label>Artist :</label>
      <input type="text" name="artist" value="Daft Punk">

      <label>Genre :</label>
      <input type="text" name="genre" value="Electro">

      <label>Album :</label>
      <input type="text" name="album" value="Alive 2007">

    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.en.app.tag }}">
  </form>
</div>


You can then change the different values to properly tag your file and click
on the save button.

### On an artist basis

If you want to change the name of an artist and properly change the tag
values for all the associated files, it's fairly easy, you just need to
go on an artist's page and then double click on their name. A field appears:

![](/documentation/images/rename.png)

Specify the value that you want and then hit "Enter".
