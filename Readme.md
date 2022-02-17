## Install
```
npm install @r00t80y/primary-navigation
```
## How to use? (Source code)
JavaScript
```
import createPrimaryNavigation from '@r00t80y/primary-navigation';

createPrimaryNavigation(document.querySelectorAll('.navigation'), {
  init: function () {
    console.log(`It's init`);
  },
});
```
Styles
```
import '@r00t80y/primary-navigation/src/scss/core/index';
import '@r00t80y/primary-navigation/src/scss/themes/clean';
```
## What's new?
### v0.1.0
- SVG Icons
```
$navigation-button__icon-svg: true !default;
```
- Restructuring the styles folder
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
```
const defaultOptions = {
  ...
  focus: false,
  ...
};
```
