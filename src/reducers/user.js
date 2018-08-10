const initState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
  name: 'Will',
  age: 20
}

const userReducer = (state=initState, action) => {
  switch(action.type) {
    case 'CHANGE_NAME': {
      return {...state, name: action.payload}
    }
    case 'CHANGE_AGE': {
      return Object.assign({}, state, {age: action.payload})
    }
    case 'FETCH_USER_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_USER_COMPLETE': {
      return {
        ...state,
        fetching: false
      }
    }
    case 'FETCH_USER_ERROR': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
    }
    default:
      return state
  }
}

export default userReducer
