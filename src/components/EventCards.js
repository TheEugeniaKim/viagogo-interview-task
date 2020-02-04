import React from 'react'
import {connect} from 'react-redux'

const EventCard = (props) => {

  return (
    <div className='eventCard'>
      <div className='dateBox'>
        {props.Day}, {props.Date} 
        <div className='time'> {props.Time} </div>
        <div className="">

        </div>
      </div>

      <div className='detailsBox'>
        {props.VenueName} - {props.VenueCity}{props.VenueStateProvince} ({props.VenueCountry})
        <br/>
        {props.EventName}
      </div>
      <button className='viewEventBtn'>View Tickets</button>
    </div>
  )
  
}



export default EventCard