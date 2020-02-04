const defaultState = {
  events: [],
  filter: null
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "GET_EVENTS":
      return {...prevState, 
        events: action.payload}
    default: 
      return prevState
  }
}

export default reducer 