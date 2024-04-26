// == Imports
import { randomHexColor, generateSpanColor } from './utils';

import store from './store/index';

import './styles/index.scss';

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll').addEventListener('click', () => {
  const newFirstColor = randomHexColor();
  const newLastColor = randomHexColor();

  const action = {
    type: 'CHANGE_ALL_COLORS',
    firstColor: newFirstColor,
    lastColor: newLastColor,
  };

  store.dispatch(action);
});

document.getElementById('randFirst').addEventListener('click', () => {
  // On calcul une nouvelle couleur
  const newColor = randomHexColor();

  // On lenvoie dans l'action pour préciser l'intention
  const action = {
    type: 'CHANGE_FIRST_COLOR',
    color: newColor,
  };

  // On envoie l'action au store
  store.dispatch(action);
});

document.getElementById('randLast').addEventListener('click', () => {
  const newColor = randomHexColor();

  const action = {
    type: 'CHANGE_LAST_COLOR',
    color: newColor,
  };

  store.dispatch(action);
});

document.getElementById('toLeft').addEventListener('click', () => {
  const action = {
    type: 'CHANGE_DIRECTION_TO_LEFT',
  };

  store.dispatch(action);
});

document.getElementById('toRight').addEventListener('click', () => {
  const action = {
    type: 'CHANGE_DIRECTION_TO_RIGHT',
  };

  store.dispatch(action);
});

const handleChangeDiagonal = (event) => {
  const action = {
    type: 'CHANGE_DIRECTION_DIAG',
    angle: event.target.id,
  };

  store.dispatch(action);
};

document
  .getElementById('45deg')
  .addEventListener('click', handleChangeDiagonal);
document
  .getElementById('135deg')
  .addEventListener('click', handleChangeDiagonal);
document
  .getElementById('225deg')
  .addEventListener('click', handleChangeDiagonal);
document
  .getElementById('315deg')
  .addEventListener('click', handleChangeDiagonal);
