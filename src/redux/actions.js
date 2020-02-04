export function getEvents(events) {
  return {type: "GET_EVENTS", payload: events}
}

export function filterLocation(location) {
  return {type: "FILTER_LOCATION", payload: location}
}