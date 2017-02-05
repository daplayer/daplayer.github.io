---
title: Utilisation des tags audios
layout: page
locale: fr
section: documentation
permalink: /fr/documentation/tags-audios.html
description: Apprenez à vous servir des tags audio pour associer les méta données que vous voulez à vos fichiers pour les lire sur tous vos supports.
---

Les tags audios ne sont pas une fonctionnalité spécifique à DaPlayer. Ce sont
des standards définits par les formats de fichiers aux quels ils sont associés
(par exemple les fichiers MP3 ont les tags ID3, les fichiers Ogg ont les tags
Vorbis, etc.).

Les tags vous permettent de customiser les méta-données associés à un fichier
audio. Les différents formats ont chacun leurs spécificités mais pour vous
faciliter la vie, DaPlayer vous permet de changer de manière très simple
les champs suivants :

* Le titre
* L'artiste
* Le genre
* L'album
* Et la pochette

À l'heure actuelle, DaPlayer supporte les tags pour les formats suivants :

| Format | Tags basiques | Pochette  |
|:------:|:-------------:|:---------:|
| MP3    |  &#10004;     |  &#10004; |
| Wav    |  &#10004;     |  &#10004; |
| M4A/AAC|  &#10004;     |  &#10004; |
| Ogg    |  &#10004;     |  &#10008; |

## Changer les tags au téléchargement

Les tags audios peuvent être changé au moement du téléchargement des médias
SoundCloud ou YouTube. Référez vous au document [Comment télécharger des
médias](telecharger-medias.html) pour plus d'informations.

## Changer les tags de fichiers locaux

Si vous souhaitez changer les tags associés à un fichier stocké sur votre
ordingateur, vous devez tout d'abord vous assurez que ce fichier est placé
dans le dossier que vous avez spécifié dans la configuration de DaPlayer.

### Fichier par fichier

Une fois que vous savez quel fichier vous souhaitez tagguer, cliquez sur
l'icône représentant les options ( <span class="octicon octicon-ellipses"> </span>)
puis sur l'icône de tag ( <span class="octicon octicon-tag"> </span>) s'il s'agit
d'un single ou bien directement sur l'icône de tag s'il s'agit d'un élément
contenu dans un album.

Ensuite, une boîte de dialogue avec les différents champs sera affichée :

<div class="local dialog tag">
  <h2>{{ site.data.app.fr.app.tag }}</h2>

  <form>
    <div class="left">
      <img src="/documentation/images/alive_cover.jpeg">

      <a href="#" class="flat_button">
        {{ site.data.app.fr.app.pick_picture }}
      </a>
    </div>

    <div class="right">
      <label>Titre :</label>
      <input type="text" name="title" value="One More Time / Aerodynamic">

      <label>Artiste :</label>
      <input type="text" name="artist" value="Daft Punk">

      <label>Genre :</label>
      <input type="text" name="genre" value="Electro">

      <label>Album :</label>
      <input type="text" name="album" value="Alive 2007">

    </div>

    <div class="clearer"></div>
    <hr>

    <input type="submit" disabled class="button download" value="{{ site.data.app.fr.app.tag }}">
  </form>
</div>

Vous pouvez ainsi changer les valeurs des champs pour tagguer à votre souhait
les différents fichiers. Finalement, cliquez sur le bouton "Sauvegarder".

### Pour un artiste

Si vous souhaitez modifier le nom d'un artiste dans votre bibliothèque et
modifier la valeur des tags pour chacun des fichiers associé à cet artiste,
c'est très simple, il vous suffit de vous rendre sur la page de l'artiste
pour de double cliquer sur son nom. Un champ apparaît alors :

![](/documentation/images/rename.png)

Spécifiez la valeur que vous souhaitez et appuyez sur "Entrée".
