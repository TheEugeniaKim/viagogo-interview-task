import React from 'react'
import {connect} from 'react-redux'
import {filterLocation} from '../redux/actions'

class Filter extends React.Component {

  getLocations(events){
    let locations = []
    for (let event of events){
      locations.push(event.VenueCity)
    }
    return locations
  } // filters all the locations from events in state into an array

  removeDuplicates(array){
    return array.sort().reduce((accumulator, current) => {
      const length = accumulator.length
      if(length === 0 || accumulator[length-1] !== current) {
        accumulator.push(current)
      }
      return accumulator
    }, [])
  } // removes the duplicate cities in an array 

  locations = (events) => {
    return this.removeDuplicates(this.getLocations(events))
  } // array of cities that will be in the filter

  handleSelect = (event) => {
    console.log("selecting")
    let location = event.target.value
    return this.props.filterLocation(location)
  } // event handler sets filterLocation in state 

  render(){
    
    let dataArray = this.locations(this.props.events)
    let options = dataArray.map((data,index) => 
      <option
        key = {index} 
        value = {data}
      >
        {data}
      </option>
    )

    return (
      <div className="filter-box">
        <h2 className="filter-header"> Search By Location: </h2>
        <select className="filter-selector" onChange={this.handleSelect}>
          <option>Select Location</option>
          {options}
        </select>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    events: state.events,
    venueCityFilter: state.venueCityFilter
  }
}

const connectedFilter = connect(mapStateToProps, {filterLocation})(Filter)

export default connectedFilter 