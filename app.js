'use strict';
const xmlfmt = require('.');

window.addEventListener('load', () => {
  const formatInput = document.querySelector('#format-input');
  const formatOutput = document.querySelector('#format-output');
  formatInput.addEventListener('input', () => {
    formatOutput.value = xmlfmt(formatInput.value, '  ');
  });
});

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service-worker.js', {
    scope: '/xmlfmt/'
  }).catch(error => console.error(error));
}
