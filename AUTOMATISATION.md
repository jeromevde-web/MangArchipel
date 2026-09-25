# MangArchipel — actualités automatiques

Le site peut maintenant être alimenté automatiquement par RSS sans modifier le HTML.

## Fonctionnement

`Manga-News RSS → scripts/update-actu.mjs → data.auto.js → pages MangArchipel`

Le flux configuré est **Actus Manga** de Manga-News :
`https://www.manga-news.com/index.php/feed/actumanga`

Le script récupère au maximum 12 entrées, déduplique les liens, et écrit seulement les métadonnées nécessaires au site : titre, date, extrait, visuel quand le flux en fournit un, source et lien original.

## Automatisation

Le workflow `.github/workflows/update-actu.yml` s'exécute automatiquement **toutes les heures** et peut aussi être lancé manuellement avec `workflow_dispatch`.

À chaque nouvelle donnée, GitHub Actions commit et pousse `data.auto.js`.

## Pour l'activer

1. Mettre le dossier `MangArchipel-site` dans un dépôt GitHub.
2. Activer le déploiement de ce dépôt vers l'hébergeur du site (GitHub Pages, Netlify, Vercel, etc.).
3. Laisser les permissions GitHub Actions sur l'écriture du contenu du dépôt.
4. Le workflow mettra à jour les actus et l'hébergeur republiera le site.

## Ajouter d'autres sources

Modifier `scripts/feeds.json` et ajouter un objet `{ "name": "...", "url": "..." }` pour chaque flux RSS compatible.

## Important

L'automatisation relaie les métadonnées et extraits du flux, avec un lien vers la source originale. Elle ne recopie pas automatiquement l'article complet.
