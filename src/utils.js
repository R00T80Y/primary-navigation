/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file Utils used in plugin
 * @since 09-02-2022
 * @updated 10-04-2022
 */

const Utils = {
  // Data Type
  type(data) {
    return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
  },

  isFunction(func) {
    return (Utils.type(func) === 'function');
  },

  uniqId() {
    const date = (Date.now()).toString(36);
    const number = (Math.random()).toString(36).substring(2);
    return date + number;
  }
};

export default Utils;
