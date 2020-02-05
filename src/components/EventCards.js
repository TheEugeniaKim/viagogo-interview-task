import React from 'react'
import {connect} from 'react-redux'

const EventCard = (props) => {

  return (
    <div className='event-card'>
      <div className='date-box'>
        {props.Day}, {props.Date} 
        <div className='time'> {props.Time} </div>
      </div>

      <div className='details-box'>
        {props.VenueName} - {props.VenueCity}{props.VenueStateProvince} ({props.VenueCountry})
        <br/>
        {props.EventName} 
        <br/>
        <div className="alert">{props.IsCheapestCity ? props.IsCheapestCityContent : null}</div>
        <div className="alert"> {props.IsSellingFast ? "This Event Is Selling Fast!" : null} </div>
      </div>
      <div className="btn-area">
        {props.IsLastDateInCity ? <div className="last-date">Last Date!</div> : null} 
        <button className='view-event-btn'>View Tickets</button>
      </div>
    </div>
  )
}

function mapStateToProps(){
  return {}
}

const connectedEventCard = connect(mapStateToProps, {})(EventCard)

export default connectedEventCard