// Basic set up separating redux code from react code
const initialState = {
  counter: 0,
  paused: false, 
  likedNumbers: {},
  comment: "",
  comments: []
}

// takes in a state and action and returns the next state.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "TOGGLE_PAUSE":
      return {
        ...state,
        paused: !state.paused
      }
    case "LIKE_NUMBER":
        const count = (state.likedNumbers[state.counter] || 0 ) + 1
  
        return {
          ...state,
          likedNumbers: {
            ...state.likedNumbers,
            [state.counter]: count
          }
        }
    case "UPDATE_COMMENT":
      return { 
        ...state,
        comment: action.payload 
      }
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, state.comment],
        comment: ""
      }
    default:
      return state
  }
}

export default reducer; 