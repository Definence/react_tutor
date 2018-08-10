// basic middleware
const logger = (store) => (next) => (action) => {
  console.log("action fired", action)
  next(action)
}

export default logger
