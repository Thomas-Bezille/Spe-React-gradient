const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  // Quand le state est undefined (initialisation du store à sa création), on retourne initialState

  // todo Retourner un nouveau state, résultat de la prise en compte de l'action.
  // (demande de modification) sur le state d'avant
  return state;
};

export default reducer;
