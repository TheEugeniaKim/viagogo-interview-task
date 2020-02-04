import React from 'react'
import {connect} from 'react-redux'
import EventCards from './EventCards'

//Container area for where the events are being displayed 

class View extends React.Component {

  render(){
    return this.props.events.map(event => {
      return (
        <EventCards 
          {...event}
          key={event.EventId}
        />
      )
    })
  }
}

function mapStateToProps(state){
  return {
    events: state.events
  }
}

const connectedView = connect(mapStateToProps, {})(View)

export default connectedView