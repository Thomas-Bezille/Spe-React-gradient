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
    case 'CHANGE_DIRECTION_TO_LEFT':
      return {
        ...state,
        direction: '270deg',
      };
    case 'CHANGE_DIRECTION_TO_RIGHT':
      return {
        ...state,
        direction: '90deg',
      };

    default:
      return state;
  }
};

export default reducer;
