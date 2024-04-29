// Annuaire des actions du projet

// === Action types
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
export const CHANGE_ALL_COLORS = 'CHANGE_ALL_COLORS';

// === Action creators
export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  newDirection: direction,
});

export const changeFirstColor = (color) => ({
  type: CHANGE_FIRST_COLOR,
  firstColor: color,
});

export const changeLastColor = (color) => ({
  type: CHANGE_LAST_COLOR,
  lastColor: color,
});

export const changeAllColors = (color1, color2) => ({
  type: CHANGE_ALL_COLORS,
  firstColor: color1,
  lastColor: color2,
});
