import {rootElement, themeContainer} from './page-selectors.js';
import {initViewController} from './view-controller.js';

const initThemeChange = () => {
  const additionalInnerFunction = (selectedButtonName) => {
    rootElement.setAttribute('data-theme-name', selectedButtonName);
  };
  initViewController(themeContainer, additionalInnerFunction);
};

export {initThemeChange};
