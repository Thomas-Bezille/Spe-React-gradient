import {
  CHANGE_DIRECTION,
  CHANGE_FIRST_COLOR,
  CHANGE_LAST_COLOR,
  CHANGE_ALL_COLORS,
} from '../actions/gradient';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  // Quand le state est undefined (initialisation du store à sa création), on retourne initialState

  // On traduit l'action en changement sur le state, et on retourne le nouveau state
  switch (action.type) {
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.firstColor,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.lastColor,
      };
    case CHANGE_ALL_COLORS:
      return {
        ...state,
        nbColors: state.nbColors + 2,
        firstColor: action.firstColor,
        lastColor: action.lastColor,
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.newDirection,
      };

    default:
      return state;
  }
};

export default reducer;
