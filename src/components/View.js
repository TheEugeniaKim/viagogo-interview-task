import React from 'react'
import {connect} from 'react-redux'
import EventCards from './EventCards'

//Container area for where the events are being displayed 

class View extends React.Component {

  render(){
    let eventArray = []
    this.props.venueCityFilter === null || this.props.venueCityFilter === "Select Location" ? 
      eventArray = this.props.events
      : 
      eventArray = this.props.events.filter(event => event.VenueCity === this.props.venueCityFilter)
    
    return (
      eventArray.map(event => {
        return (
          <EventCards 
            {...event}
            key={event.EventId}
          />
        )
      })
    ) 
  }
}

function mapStateToProps(state){
  return {
    events: state.events,
    venueCityFilter: state.venueCityFilter
  }
}

const connectedView = connect(mapStateToProps, {})(View)

export default connectedView