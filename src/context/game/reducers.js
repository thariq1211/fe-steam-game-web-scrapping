import action from "./actions";

export const initialState = {
  result: "",
  gameDetails: "",
};

export const reducers = (state, act) => {
  switch (act.type) {
    case action.SET_RESULT:
      return { ...state, result: act.payload };
    case action.CLEAR_RESULT:
      return { ...state, result: "" };
    case action.SET_GAME_DETAIL:
      return { ...state, gameDetails: act.payload };
    case action.CLEAR_GAME_DETAIL:
      return { ...state, gameDetails: "" };
    default:
      return state;
  }
};
