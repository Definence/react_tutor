const initState = []

const historyReducer = (state=initState, action) => {
  switch(action.type) {
    case 'CHANGE_NAME': {
      return [ ...state, `name: ${action.payload}` ]
    }
    case 'CHANGE_AGE': {
      return [ ...state, `age: ${action.payload}` ]
    }
    default:
      return state
  }
}

export default historyReducer
