## Install
```console
npm install @r00t80y/primary-navigation
```
## How to use?

### JavaScript
```js
import { createPrimaryNavigation } from '@r00t80y/primary-navigation';

const pluginDestroyCallback = createPrimaryNavigation(document.getElementById('navigation'), {
  init: function () {
    console.log(`It's works!`);
  },
  open() {
    console.log('Menu Open');
  },
  close() {
    console.log('Menu Close');
  }
});

// pluginDestroyCallback()
```

### Styles
```scss
@import '@r00t80y/primary-navigation/src/scss/primary-navigation/core/index';
@import '@r00t80y/primary-navigation/src/scss/primary-navigation/themes/clean';
```
or copy the styles and edit ```@r00t80y/primary-navigation/dist/primary-navigation.css```


### HTML
```html
<div id="navigation" class="navigation">
  <input type="checkbox" id="navigation__state-control" name="navigation__state-control" class="navigation__state-control" checked="false" style="display:none">
  <!-- Sometimes the browser caches the state of the checkbox -->
  <script>document.getElementById('navigation__state-control').checked = false;</script>
  <!-- Burger Icon -->
  <label class="navigation__button navigation__button--burger" role="button" aria-controls="navigation__panel" aria-expanded="false" aria-label="Open menu" for="navigation__state-control" tabindex="0">
    <span></span>
  </label>
  <nav id="navigation__panel" class="navigation__panel navigation__panel--left" data-visible="hidden">
    <div class="navigation__button-wrapper">
      <!-- Close Icon -->
      <label class="navigation__button navigation__button--close" role="button" aria-controls="navigation__panel" aria-expanded="false" aria-label="Close menu" for="navigation__state-control" tabindex="0">
        <span></span>
      </label>
    </div>
    <!-- Menu -->
    <ul class="navigation__list">
      <li class="navigation__item"><a href="/" class="navigation__link">Link 1</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 2</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 3</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 4</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 5</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 6</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 7</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 8</a></li>
      <li class="navigation__item"><a href="/" class="navigation__link">Link 9</a></li>
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
$navigation-panel-width: 100%;
$navigation-panel-max-width: 400px;
$navigation-panel-height: 100%;
$navigation-panel-background: rgba(#fff, 0.95);
$navigation-panel-transition-duration: 400ms;

$navigation-button__icon-svg: true;
$navigation-button__icon-color: #000;
$navigation-button__icon-color--hover: false;
```

## What's new?
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
