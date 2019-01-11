const DEFAULT = 'A site'

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case 'HOME':
      return DEFAULT
    case 'CATEGORIES':
      return `${DEFAULT} - category ${action.payload.category}`
    default:
      return state
  }
}
