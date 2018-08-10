const initState = {
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
    default:
      return state
  }
}

export default userReducer
