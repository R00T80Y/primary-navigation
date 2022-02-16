import createPrimaryNavigation from './PrimaryNavigation';
import './scss/primary-navigation/index.scss';

const menuList = createPrimaryNavigation(document.querySelectorAll('.navigation'), {
  open: function () {
    console.log('Menu Open');
  },
  close: function () {
    console.log('Menu Close');
  },
});

for (let i = 0, l = menuList.length; i < l; ++i) {
  console.log(menuList[i].options);
  // menuList[i].destroy();
}
