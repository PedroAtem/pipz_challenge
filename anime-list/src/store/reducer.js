const INITIAL_STATE = {
  data: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_ANIMES':
      return { ...state, loading: true };
    case 'SUCCESS_ANIMES':
      return { data: action.payload.data, loading: false, error: false };
    case 'FAILURE_ANIMES':
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}
