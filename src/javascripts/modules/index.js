/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

// Require the IO polyfill before requiring any other modules.
require('intersection-observer');

//Load Modules
const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const Module = require(`./${name}`).default
  new Module(el)
}

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/
