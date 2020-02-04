import React from 'react'
import {connect} from 'react-redux'

const EventCard = (props) => {

  return (
    <div className='event-card'>
      <div className='date-box'>
        {props.Day}, {props.Date} 
        <div className='time'> {props.Time} </div>
        <div className="">

        </div>
      </div>

      <div className='details-box'>
        {props.VenueName} - {props.VenueCity}{props.VenueStateProvince} ({props.VenueCountry})
        <br/>
        {props.EventName}
      </div>
      <button className='view-event-btn'>View Tickets</button>
    </div>
  )
  
}

function mapStateToProps(){
  return {}
}

const connectedEventCard = connect(mapStateToProps, {})(EventCard)

export default connectedEventCard