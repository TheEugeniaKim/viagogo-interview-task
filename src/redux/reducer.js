const defaultState = {
  events: [],
  venueCityFilter: null
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "GET_EVENTS":
      return {...prevState, 
        events: action.payload
    }
    case "FILTER_LOCATION":
      return {...prevState,
        venueCityFilter: action.payload
    }
    default: 
      return prevState
  }
}

export default reducer 