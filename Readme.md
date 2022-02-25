## Install
```console
npm install @r00t80y/primary-navigation
```
## How to use?
JavaScript
```js
import { createPrimaryNavigation } from '@r00t80y/primary-navigation';

createPrimaryNavigation(document.querySelectorAll('.navigation'), {
  init: function () {
    console.log(`It's init`);
  },
});
```
Styles
```scss
@import '@r00t80y/primary-navigation/src/scss/primary-navigation/core/index';
@import '@r00t80y/primary-navigation/src/scss/primary-navigation/themes/clean';
```
# Options Default
```json
{
  breakpointClose: 756,
  init: false,
  open: false,
  close: false
}
```

** breakpointClose (`Number`) **
Close menu if browser window size is larger than `breakpointClose`

** init (`Callback Function`) **
Called once during plug-in initialisation

** open (`Callback Function`) **
Called when opening a menu

** close `(Callback Function)` **
Called when the menu is closed

## What's new?
### v1.1.0
- SVG Icons
```scss
$navigation-button__icon-svg: true !default;
```
- Restructuring the styles folder `./src/scss`
```
`primary-navigation`
-- `core`
---- `icons`
------ `css.scss`
------ `svg.scss`
---- `vars.scss`
---- `panel.scss`
---- `button.scss`
---- `index.scss`
-- themes
---- `clean.scss`
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
