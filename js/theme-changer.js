import {themeContainer, rootElement} from './page-selectors.js';

const initThemeChange = () => {
  const onThemeButtonClick = (evt) => {
    const button = evt.target.closest('button');
    if (button !== null) {
      const isButtonActive = button.classList.contains('active');
      if (isButtonActive === false) {
        const activeButton = themeContainer.querySelector('.active');
        activeButton.classList.remove('active');
        button.classList.add('active');
        const selectedButtonName = button.getAttribute('data-button-name');
        rootElement.setAttribute('data-theme-name', selectedButtonName);
      }
    }
  };

  themeContainer.addEventListener('click', onThemeButtonClick);
};

export {initThemeChange};
