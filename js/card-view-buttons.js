import {cardButtonsContainer, cards} from './page-selectors.js';

const initCardViewButtons = () => {
  const onCardViewButtonClick = (evt) => {
    const button = evt.target.closest('button');
    if (button !== null) {
      const isButtonActive = button.classList.contains('active');
      if (isButtonActive === false) {
        const activeButton = cardButtonsContainer.querySelector('.active');
        activeButton.classList.remove('active');
        button.classList.add('active');
        const selectedButtonName = button.getAttribute('data-button-name');
        cards.className = `cards ${selectedButtonName}`;
      }
    }
  };
  cardButtonsContainer.addEventListener('click', onCardViewButtonClick);
};

export {initCardViewButtons};
