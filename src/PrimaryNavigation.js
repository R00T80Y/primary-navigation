/* eslint-disable import/prefer-default-export */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file
 * @since 23-01-2022
 * @updated 12-05-2022
 * @version 0.2.1
 */

import 'custom-event-polyfill';
import 'element-closest-polyfill';
import { throttle } from 'throttle-debounce';
import Utils from './utils';

const defaultOptions = {
  breakpointClose: 756,
  overflowHidden: true,

  stateControlSelector: '.navigation__state-control',
  panelSelector: '.navigation__panel',
  buttonSelector: '.navigation__button.navigation__button--burger',

  focus: false,

  init: false,
  open: false,
  close: false
};

function Plugin($rootElement, pluginOptions) {
  const $checkbox = $rootElement.querySelector(pluginOptions.stateControlSelector);
  const $button = $rootElement.querySelector(pluginOptions.buttonSelector);
  const $labelsList = $rootElement.querySelectorAll(`label[for="${$checkbox.id}"]`);
  const $panel = $rootElement.querySelector(pluginOptions.panelSelector);

  const uniqName = (function () {
    let name;
    do {
      name = `primary-navigation-${Utils.uniqId()}`;
    } while (document.getElementById(name));
    return name;
  }());

  $rootElement.setAttribute('data-plugin-name-uniq', uniqName);
  $rootElement.setAttribute('data-plugin-name', 'primary-navigation');

  // Menu opened or not
  function isOpen() {
    return !!$checkbox.checked;
  }

  // Open menu
  function open() {
    if (!isOpen()) {
      $checkbox.checked = true;
      $checkbox.dispatchEvent(new CustomEvent('change'));
    }
  }

  // Close menu
  function close() {
    if (isOpen()) {
      $checkbox.checked = false;
      $checkbox.dispatchEvent(new CustomEvent('change'));
    }
  }

  // Close All opened menus
  function closeAll() {
    const $menuList = document.querySelectorAll('[data-plugin-name="primary-navigation"]');
    if ($menuList) {
      for (let i = 0, l = $menuList.length; i < l; i += 1) {
        const $menuCheckbox = $menuList[i].querySelector(pluginOptions.stateControlSelector);
        if ($menuCheckbox) {
          const isChecked = !!$menuCheckbox.checked;
          if (isChecked === true) {
            $menuCheckbox.checked = false;
            $menuCheckbox.dispatchEvent(new CustomEvent('change'));
          }
        }
      }
    }
  }

  function onKeydown(e) {
    e.stopPropagation();

    // Enter, Space
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      if (isOpen()) {
        close();
      } else {
        closeAll();
        open();
      }
      // Esc
    } else if (e.keyCode === 27) {
      e.preventDefault();
      closeAll();
    }
  }

  function onKeydownEsc(e) {
    e.stopPropagation();

    // Esc
    if (e.keyCode === 27) {
      e.preventDefault();
      closeAll();
    }
  }

  // Close the menu by clicking on the page
  function onClickDocument(event) {
    // If the menu is closed, then exit the function
    if (!isOpen()) return;

    // Ignore click inside the menu
    if (event.target.closest(`[data-plugin-name-uniq="${uniqName}"]`)) {
      return;
    }

    // Close menu
    closeAll();
  }

  function onStateModify(event) {
    // Is the menu open or not?
    if (event.target.checked) {
      if (pluginOptions.overflowHidden) {
        document.querySelector('html').style.overflow = 'hidden';
      }

      for (let i = 0, l = $labelsList.length; i < l; i += 1) {
        $labelsList[i].setAttribute('aria-expanded', 'true');
      }

      $panel.setAttribute('data-visible', 'true');

      if (pluginOptions.focus) {
        setTimeout(() => {
          $panel.querySelector('a').focus();
        }, 400);
      }

      if (Utils.isFunction(pluginOptions.open)) {
        pluginOptions.open();
      }
    } else {
      if (pluginOptions.overflowHidden) {
        document.querySelector('html').style.overflow = 'auto';
      }

      for (let i = 0, l = $labelsList.length; i < l; i += 1) {
        $labelsList[i].setAttribute('aria-expanded', 'false');
      }

      $panel.setAttribute('data-visible', 'false');

      if (pluginOptions.focus) {
        $button.focus();
      }

      if (Utils.isFunction(pluginOptions.close)) {
        pluginOptions.close();
      }
    }
  }

  const onResizeWindow = throttle(
    200,
    () => {
      // Close the menu if the window is resized
      if (isOpen()) {
        if (document.body.clientWidth >= pluginOptions.breakpointClose) {
          close();
        }
      }
    }
  );

  function createEvents() {
    if (pluginOptions.breakpointClose !== false) {
      window.addEventListener('resize', onResizeWindow);
    }

    $rootElement.addEventListener('keydown', onKeydownEsc);
    $checkbox.addEventListener('change', onStateModify);
    for (let i = 0, l = $labelsList.length; i < l; i += 1) {
      $labelsList[i].addEventListener('keydown', onKeydown);
    }

    document.addEventListener('click', onClickDocument, true);
  }

  function removeEvents() {
    window.removeEventListener('resize', onResizeWindow);

    $rootElement.removeEventListener('keydown', onKeydownEsc);
    $checkbox.removeEventListener('change', onStateModify);
    for (let i = 0, l = $labelsList.length; i < l; i += 1) {
      $labelsList[i].removeEventListener('keydown', onKeydown);
    }

    document.removeEventListener('click', onClickDocument);
  }

  function destroy() {
    removeEvents();
  }

  // When the page loads, close the menu
  close();
  createEvents();

  if (Utils.isFunction(pluginOptions.init)) {
    pluginOptions.init();
  }

  return {
    get options() { return pluginOptions; },
    isOpen,
    open() { open(); },
    close() { close(); },
    destroy
  };
}

function createPrimaryNavigation(element, customOptions) {
  const nodeList = [];
  const instances = [];

  return (function init() {
    if (element && element instanceof HTMLElement) {
      nodeList.push(element);
    } else if (element && typeof element === 'string') {
      const elementsList = document.querySelectorAll(element);
      for (let i = 0, l = elementsList.length; i < l; i += 1) {
        if (elementsList[i] instanceof HTMLElement) {
          nodeList.push(elementsList[i]);
        }
      }
    } else if (element && element.length) {
      for (let i = 0, l = element.length; i < l; i += 1) {
        if (element[i] instanceof HTMLElement) {
          nodeList.push(element[i]);
        }
      }
    }

    for (let i = 0, l = nodeList.length; i < l; i += 1) {
      instances.push(new Plugin(nodeList[i], {
        ...defaultOptions,
        ...customOptions,
        name: 'ToggleButton'
      }));
    }

    return instances;
  }());
}

export {
  createPrimaryNavigation
};
