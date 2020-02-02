import React from 'react'

const EventCard = (props) => {
  return (
    <div className='eventCard'>
      <div className='dateBox'>
        {props.Day}, {props.Date} 
        
        <div className='time'> {props.Time} </div>
      </div>
      <div className='detailsBox'>
        {props.VenueName} - {props.VenueCity},{props.VenueStateProvince}
        <br/>
        {props.EventName}
      </div>
      <button className='viewEventBtn'>View</button>
    </div>
  )
  
}

export default EventCard