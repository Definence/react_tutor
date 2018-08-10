// just for error handler's testing
const errorReducer = (state=null, action) => {
  switch(action.type) {
    case 'ERROR': {
      throw new Error('AAAAAAA!!!!!!!!!!!!')
    }
    default:
      return state
  }
}

export default errorReducer
