/* eslint-disable import/prefer-default-export */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file
 * @since 23-01-2022
 * @updated 16-02-2022
 * @version 0.2.0
 */

import 'custom-event-polyfill';
import './polyfill';
import { ResizeDelay } from '@r00t80y/resize-delay';
import Utils from './utils';

const defaultOptions = {
  breakpointClose: 756,

  stateControlSelector: '.navigation__state-control',
  panelSelector: '.navigation__panel',
  buttonSelector: '.navigation__button.navigation__button--burger',

  focus: false,

  init: false,
  open: false,
  close: false
};

function Plugin($rootElement, pluginOptions) {
  // Link to function to remove the resize event
  let resizeDestroyCallback = null;

  const $checkbox = $rootElement.querySelector(pluginOptions.stateControlSelector);
  const $button = $rootElement.querySelector(pluginOptions.buttonSelector);
  const $labelsList = $rootElement.querySelectorAll(`label[for="${$checkbox.id}"]`);
  const $panel = $rootElement.querySelector(pluginOptions.panelSelector);

  // Menu opened or not
  function isOpen() {
    return $checkbox.checked;
  }

  // Open menu
  function open() {
    $checkbox.checked = true;
    $checkbox.dispatchEvent(new CustomEvent('change'));
  }
  // Close menu
  function close() {
    $checkbox.checked = false;
    $checkbox.dispatchEvent(new CustomEvent('change'));
  }

  function onKeydown(e) {
    e.stopPropagation();

    // Enter, Space
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      if (isOpen()) {
        close();
      } else {
        open();
      }
      // Esc
    } else if (e.keyCode === 27) {
      e.preventDefault();
      close();
    }
  }

  function onKeydownEsc(e) {
    e.stopPropagation();

    // Esc
    if (e.keyCode === 27) {
      e.preventDefault();
      close();
    }
  }

  // Close the menu by clicking on the page
  function onClickDocument(event) {
    event.stopPropagation();

    // If the menu is closed, then exit the function
    if (!isOpen()) return;

    // Ignore click inside the menu
    if (event.target.closest(`#${$rootElement.id}`)) return;

    // Close menu
    close();
  }

  function onStateModify(event) {
    // Is the menu open or not?
    if (event.target.checked) {
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

  function createEvents() {
    if (pluginOptions.breakpointClose !== false) {
      resizeDestroyCallback = (new ResizeDelay()).add(() => {
        // Close the menu if the window is resized
        if (document.body.clientWidth >= pluginOptions.breakpointClose) {
          close();
        }
      });
    }

    $rootElement.addEventListener('keydown', onKeydownEsc);
    $checkbox.addEventListener('change', onStateModify);
    for (let i = 0, l = $labelsList.length; i < l; i += 1) {
      $labelsList[i].addEventListener('keydown', onKeydown);
    }

    document.addEventListener('click', onClickDocument);
  }

  function removeEvents() {
    resizeDestroyCallback();

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
      // instances.push(Plugin(nodeList[i], Object.assign({}, defaultOptions, customOptions, {
      //   name: 'ToggleButton'
      // })));
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
