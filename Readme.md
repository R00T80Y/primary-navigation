# Menu demo whit clean theme
[Menu demonstration with a 'clean theme'](https://r00t80y.github.io/demo/primary-navigation/index.html)

## Install
```console
npm install @r00t80y/primary-navigation
```
You may need to install "peerDependencies"
```console
npm install throttle-debounce custom-event-polyfill element-closest-polyfill
```

## How to use with webpack?

### JavaScript
```js
// Add Styles
import '@r00t80y/primary-navigation/dist/scss/core/index';
import '@r00t80y/primary-navigation/dist/scss/themes/clean';

// Add Script
import { createPrimaryNavigation } from '@r00t80y/primary-navigation';

// Init Menu
createPrimaryNavigation(document.querySelector('.navigation'), {
  init: function () {
    console.log(`It's works!`);
  }
});
```

#### HTML
```html
<div class="navigation">
  <input type="checkbox" id="navigation__state-control" name="navigation__state-control" class="navigation__state-control" checked="false" style="display:none">
  <!-- Sometimes the browser caches the state of the checkbox -->
  <script>document.getElementById('navigation__state-control').checked = false;</script>
  <!-- Burger Icon -->
  <label class="navigation__button navigation__button--burger" role="button" aria-controls="navigation__panel" aria-expanded="false" aria-label="Open/Close menu" for="navigation__state-control" tabindex="0">
    <span></span>
  </label>
  <nav id="navigation__panel" class="navigation__panel navigation__panel--right" data-visible="hidden">
    <div class="navigation__panel-top">
      <!-- Close Icon -->
      <label class="navigation__button navigation__button--close" role="button" aria-controls="navigation__panel" aria-expanded="false" aria-label="Close menu" for="navigation__state-control" tabindex="0">
        <span></span>
      </label>
    </div>
    <!-- Menu -->
    <ul class="navigation__list">
      <li class="navigation__item"><a href="#" class="navigation__link">Link 1</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 2</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 3</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 4</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 5</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 6</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 7</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 8</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 9</a></li>
    </ul>
  </nav>
</div>
```

## Default Options
```js
{
  breakpointClose: 756,
  overflowHidden: true,

  init: false,
  open: false,
  close: false
}
```

### breakpointClose (`Number`)
Close menu if browser window size is larger than `breakpointClose`

### overflowHidden (`Boolean`)
Add `overflow:hidden` when the menu is open

### init (`Callback Function`)
Called once during plug-in initialisation

### open (`Callback Function`)
Called when opening a menu

### close `(Callback Function)`
Called when the menu is closed

## Default Style Options
```scss
$navigation-breakpoint: 756px;

$navigation-panel-width: 100%;
$navigation-panel-max-width: 400px;
$navigation-panel-height: 100%;
$navigation-panel-background: rgba(#fff, 0.95);
$navigation-panel-transition-duration: 400ms;

$navigation-button__icon-svg: true;
$navigation-button__icon-color: #000;
$navigation-button__icon-color--hover: false;
```

## How to use with CDN?
```html
<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://cdn.jsdelivr.net/npm/@r00t80y/primary-navigation@1.3.5/dist/primary-navigation.css" rel="stylesheet">

</head><body>

<!-- Start: Primary Navigation(Right) -->
<div class="navigation">
  <input type="checkbox" id="navigation__state-control" name="navigation__state-control" class="navigation__state-control" checked="false" style="display:none">
  <!-- Sometimes the browser caches the state of the checkbox -->
  <script>document.getElementById('navigation__state-control').checked = false;</script>
  <!-- Burger Icon -->
  <label class="navigation__button navigation__button--burger" for="navigation__state-control" tabindex="0">
    <span></span>
  </label>
  <nav class="navigation__panel navigation__panel--right">
    <div class="navigation__panel-top">
      <!-- Close Icon -->
      <label class="navigation__button navigation__button--close" for="navigation__state-control" tabindex="0">
        <span></span>
      </label>
    </div>
    <!-- Menu -->
    <ul class="navigation__list">
      <li class="navigation__item"><a href="#" class="navigation__link">Link 11</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 12</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 13</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 14</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 15</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 16</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 17</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 18</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Link 19</a></li>
    </ul>
  </nav>
</div>
<!-- End: Primary Navigation(Right) -->

<script defer="" src="https://cdn.jsdelivr.net/npm/@r00t80y/primary-navigation@1.3.5/dist/PrimaryNavigation.lib.js"></script>
<script>
window.addEventListener('load', function () {
  createPrimaryNavigation(
    document.querySelectorAll('.navigation')
  );
})
</script>

</body></html>
```

## What's new?
### v1.3.5
- Docs updated
- SCSS files moved to dist dir
- Renamed init plugin function PrimaryNavigation -> createPrimaryNavigation
### v1.3.4
- Docs updated
- Replaced "ResizeDelay" on "throttle-debounce"
- Fix: Close menu on press "ESC" button

### v1.3.3
- Fix Bug: click

### v1.3.1
- Added default option `overflowHidden`

### v1.1.0
- SVG Icons
```scss
$navigation-button__icon-svg: true !default;
```
- Restructuring the styles folder `./src/scss`
```
primary-navigation
-- core
---- icons
------ css.scss
------ svg.scss
---- vars.scss
---- panel.scss
---- button.scss
---- index.scss
-- themes
---- clean.scss
```
- Focus is off by default
```js
const defaultOptions = {
  ...
  focus: false,
  ...
};
```

## License
[MIT](./LICENSE)
