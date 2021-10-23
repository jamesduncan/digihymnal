# digiHymnal

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "",
  "type": [
    "pwa"
  ],
  "name": "digiHymnal",
  "framework": "core",
  "template": "single-view",
  "bundler": "webpack",
  "cssPreProcessor": false,
  "theming": {
    "customColor": true,
    "color": "#ff5d00",
    "darkTheme": true,
    "iconFonts": false,
    "fillBars": false
  },
  "customBuild": false,
  "webpack": {
    "developmentSourceMap": true,
    "productionSourceMap": true,
    "hashAssets": false,
    "preserveAssetsPaths": false,
    "inlineAssets": true
  }
}
```

## Development

Install webpack
`npm install -g webpack`

```
git clone git@github.com:owner/digihymnal.git digihymnal
cd digihymnal
npm install
npm run dev
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build-dev` - build web app using development mode (faster build without minification and optimization)
* 🔧 `build-prod` - build web app for production

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)



* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)


Concept: after each phrase there is a 'break' in the float. This allows for 'blank' space for a language/chord/number to exist without getting overlapped . We  can have abscense of an element without reporting it with a `''` style blank

[{en:'a'},
{at:'b'},
{number:'&'},
{chord:'Em'}]
`    Em
   &
a
  b     `

**If in middle, if no language tag for display language, it should collapse backwards**
Do not collapse forwards
[{en:'a'},
{at:'b'},
{number:'&'},
{chord:'Em'},
{en:'c'}]
`   Em
    &
a   c
  b     `

Pages:
view-song
- display a 1-2 languages
- display chords
- - display phrases for each chord
- display numbers
- - break up chord-phrase favoring the 1st language
 - edit line test
 - - consolidate lyrics of 1st language
 - - remove number-markers (exact or percentage location ? )
 - - recive user's input
 - - replace number-markers

line-edit-chords
 - display all languages with chord sliders
 - display all chords
 - ignore locations of number markers using diacritic checker

line-edit-numbers
 - display all languages with number-sliders
 - display all numbers
 - (disallow editing text?)
 - process for each language:
 - - store locations of chords, 
 - - combine whole line
 - - get locations of numbers
 - - place on sliders
 - - get new locations from slider
 - - place on line-text (diacritically checked)
 - - place new text into phrases(diacritically checked to ignore number-markers)
 - - !! User percentages or exact indexes ??


## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi
