import React from 'react'
import {connect} from 'react-redux'
import {json} from '../eventlist'
import EventCards from './EventCards'
import {getEvents} from '../redux/actions'

class View extends React.Component {

  componentDidMount(){
    return this.props.getEvents(json.Items)
  }

  render(){
    console.log(this.props.events)
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

const connectedView = connect(mapStateToProps, {getEvents})(View)

export default connectedView