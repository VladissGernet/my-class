const initViewController = (container, additionalFunction) => {
  const onCardViewButtonClick = (evt) => {
    const button = evt.target.closest('button');
    if (button !== null) {
      const isButtonActive = button.classList.contains('active');
      if (isButtonActive === false) {
        const activeButton = container.querySelector('.active');
        activeButton.classList.remove('active');
        button.classList.add('active');
        const selectedButtonName = button.getAttribute('data-button-name');
        additionalFunction(selectedButtonName);
      }
    }
  };
  container.addEventListener('click', onCardViewButtonClick);
};

export {initViewController};

