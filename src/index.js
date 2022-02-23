/* eslint-disable no-console */
import './scss/primary-navigation/index.scss';
import createPrimaryNavigation from './PrimaryNavigation';

const menuList = createPrimaryNavigation(document.querySelectorAll('.navigation'), {
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
