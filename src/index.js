/* eslint-disable no-console */
import './scss/primary-navigation/index.scss';
import { createPrimaryNavigation } from './PrimaryNavigation';

const menuList = createPrimaryNavigation(document.querySelectorAll('.navigation'), {
  // overflowHidden: false,
  open() {
    console.log('Menu Open');
  },
  close() {
    console.log('Menu Close');
  }
});

for (let i = 0, l = menuList.length; i < l; i += 1) {
  console.log(menuList[i].options);
  // menuList[i].destroy();
}

// Test Click
const $button = document.createElement('button');
$button.innerText = 'Click';
$button.addEventListener('click', () => {
  console.log('Click');
});
document.body.appendChild($button);
