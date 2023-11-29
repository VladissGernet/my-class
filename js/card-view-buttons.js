import {cardButtonsContainer, cards} from './page-selectors.js';
import {initViewController} from './view-controller.js';

const initCardViewButtons = () => {
  const additionalInnerFunction = (selectedButtonName) => {
    cards.className = `cards ${selectedButtonName}`;
  };
  initViewController(cardButtonsContainer, additionalInnerFunction);
};

export {initCardViewButtons};
