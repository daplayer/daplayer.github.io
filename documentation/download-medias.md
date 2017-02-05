---
title: How to download medias
layout: page
locale: en
section: documentation
description: Learn how to download audios and videos from SoundCloud and YouTube and the different download options that are available to you.
---

Before even starting downloading a media, DaPlayer allows you to customize certain
options.

First, to show the options dialog, you need to click on the horizontal options
icon for media boxes ( <span class="octicon octicon-ellipsis"></span>) then on
the download icon ( <span class="octicon octicon-arrow-down"></span>) on a media
box or directly on the download icon for elements inside albums or playlists.

> **Note**: if you are downloading MP3s, for both SoundCloud and YouTube downloads,
> the values specified in the dialog described below will be set as audio tags
> for the resulting file.
>
> Check out the [Using audio tags](audio-tags.html) guide for further information.

## For SoundCloud

Once the dialog is displayed, you can customize the download options as you wish
You can customize meta-data such as the title, the name of the artist, the genre
and the cover art.

<div class="soundcloud dialog tag">
  <h2>{{ site.data.app.en.app.download }}</h2>

  <form>
    <div class="left">
      <img src="https://i1.sndcdn.com/artworks-000169145837-ksfaci-t200x200.jpg">

      <a href="#" class="flat_button">
        {{ site.data.app.en.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Title :</label>
      <input type="text" name="title" value="So Clear (feat. Meeka Kates)">

      <label>Artist :</label>
      <input type="text" name="artist" value="Kraak & Smaak">

      <label>Genre :</label>
      <input type="text" name="genre" value="Electronic">

    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.en.app.download }}">
  </form>
</div>


## For YouTube

The YouTube customization dialog is bit different whether you are trying to download
a video or the MP3 associated with it.

If you pick "MP3", the dialog will have the same options as the SoundCloud one.

<div class="youtube dialog tag">
  <h2>{{ site.data.app.en.app.download }}</h2>

  <form>
    <div class="left">
      <img src="https://i.ytimg.com/vi/i_ZYs7Ufajg/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Pca3BlvalRwTPvdLNPlMtG8ri18">

      <a href="#" class="flat_button">
        {{ site.data.app.en.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Title :</label>
      <input type="text" name="title" value="Darius - Maliblue">

      <label>Format :</label>

      <input type="radio" value="mp3" name="format" checked> <label>MP3</label>
      <input type="radio" value="video" name="format"> <label>Video</label><br>
    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.en.app.download }}">
  </form>
</div>

If you pick "Video" then the dialog will only allows you to specify the video's
title and it will be picked as a file name for the downloaded file.

<div class="youtube dialog tag">
  <h2>{{ site.data.app.en.app.download }}</h2>

  <form>
    <div class="left">
      <img src="https://i.ytimg.com/vi/mhJh5_6MuCk/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=haY6ogfc1AJXBU-s0qmK9x08Oaw">

      <a href="#" class="flat_button">
        {{ site.data.app.en.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Title :</label>
      <input type="text" name="title" value="Slipknot - Killpop">

      <label>Format :</label>

      <input type="radio" value="mp3" name="format"> <label>MP3</label>
      <input type="radio" value="video" name="format" checked> <label>Video</label><br>
    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.en.app.download }}">
  </form>
</div>
