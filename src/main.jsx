// == Imports
import { randomHexColor, generateSpanColor } from './utils';

import store from './store/index';

import './styles/index.scss';
import {
  changeAllColors,
  changeDirection,
  changeFirstColor,
  changeLastColor,
} from './actions/gradient';

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

  const action = changeAllColors(newFirstColor, newLastColor);
  store.dispatch(action);
});

document.getElementById('randFirst').addEventListener('click', () => {
  const newColor = randomHexColor();

  const action = changeFirstColor(newColor);
  store.dispatch(action);
});

document.getElementById('randLast').addEventListener('click', () => {
  const newColor = randomHexColor();

  const action = changeLastColor(newColor);
  store.dispatch(action);
});

document.getElementById('toLeft').addEventListener('click', () => {
  const action = changeDirection('270deg');
  store.dispatch(action);
});

document.getElementById('toRight').addEventListener('click', () => {
  const action = changeDirection('90deg');
  store.dispatch(action);
});

document.getElementById('to45').addEventListener('click', () => {
  const action = changeDirection('45deg');
  store.dispatch(action);
});

document.getElementById('to135').addEventListener('click', () => {
  const action = changeDirection('135deg');
  store.dispatch(action);
});

document.getElementById('to225').addEventListener('click', () => {
  const action = changeDirection('225deg');
  store.dispatch(action);
});

document.getElementById('to315').addEventListener('click', () => {
  const action = changeDirection('315deg');
  store.dispatch(action);
});
