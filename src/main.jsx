// == Imports
import { randomHexColor, generateSpanColor } from './utils';

import store from './store/index';

import './styles/index.scss';

// == State
const state = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

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

// == Controls
document.getElementById('randAll').addEventListener('click', () => {
  // debug
  console.log('Random all colors');

  // data
  state.nbColors += 2;
  state.firstColor = randomHexColor();
  state.lastColor = randomHexColor();

  // ui
  renderNbColors();
  renderGradient();
  renderColors();
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

  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById('randLast').addEventListener('click', () => {
  state.nbColors += 1;
  state.lastColor = randomHexColor();
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById('toLeft').addEventListener('click', () => {
  const action = {
    type: 'CHANGE_DIRECTION_TO_LEFT',
  };

  store.dispatch(action);

  renderGradient();
  renderColors();
});

document.getElementById('toRight').addEventListener('click', () => {
  const action = {
    type: 'CHANGE_DIRECTION_TO_RIGHT',
  };

  store.dispatch(action);

  renderGradient();
  renderColors();
});
