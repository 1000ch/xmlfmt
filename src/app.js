import {documentReady} from 'html-ready';
import xmlfmt from '..';

documentReady.then(() => {
  const formatInput = document.querySelector('#format-input');
  const formatOutput = document.querySelector('#format-output');
  const formatError = document.querySelector('#format-error');

  formatInput.addEventListener('input', () => {
    try {
      formatOutput.value = xmlfmt(formatInput.value, '  ');
      formatError.textContent = '';
    } catch (error) {
      formatError.textContent = error.message;
    }
  });
});
