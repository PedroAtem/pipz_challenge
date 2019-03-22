const INITIAL_STATE = {
  list: [],
  anime: {}
};

export default function animes(state = INITIAL_STATE, action) {
  switch (action.type) {

    case 'REQUEST_ANIMES':
      return { ...state, loading: true };
    case 'SUCCESS_ANIMES':
      return { list: action.payload.data, loading: false, error: false };
    case 'FAILURE_ANIMES':
      return { list: [], loading: false, error: true };
    
    case 'REQUEST_FIRST_ANIMES':
      return { ...state, loading: true };
    case 'SUCCESS_FIRST_ANIMES':
      return { list: action.payload.data, loading: false, error: false };
    case 'FAILUREFIRST_ANIMES':
      return { list: [], loading: false, error: true };
    
    case 'REQUEST_PREV_ANIMES':
      return { ...state, loading: true };
    case 'SUCCESS_PREV_ANIMES':
      return { list: action.payload.data, loading: false, error: false };
    case 'FAILURE_PREV_ANIMES':
      return { list: [], loading: false, error: true };

    case 'REQUEST_NEXT_ANIMES':
      return { ...state, loading: true };
    case 'SUCCESS_NEXT_ANIMES':
      return { list: action.payload.data, loading: false, error: false };
    case 'FAILURE_NEXT_ANIMES':
      return { list: [], loading: false, error: true };

    case 'REQUEST_LAST_ANIMES':
      return { ...state, loading: true };
    case 'SUCCESS_LAST_ANIMES':
      return { list: action.payload.data, loading: false, error: false };
    case 'FAILURE_LAST_ANIMES':
      return { list: [], loading: false, error: true };

    case 'REQUEST_ANIME':
      return { ...state, loading: true };
    case 'SUCCESS_ANIME':
      return { anime: action.payload.data, loading: false, error: false };
    case 'FAILURE_ANIME':
      return { anime: [], loading: false, error: true };

    default:
      return state;
  }
}