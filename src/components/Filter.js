import React from 'react'
import {connect} from 'react-redux'

class Filter extends React.Component {

  getLocations(events){
    let locations = []
    for (let event of events){
      locations.push(event.VenueCity)
    }
    return locations
  } // Helper function to 

  removeDuplicates(array){
    return array.sort().reduce((accumulator, current) => {
      const length = accumulator.length
      if(length === 0 || accumulator[length-1] !== current) {
        accumulator.push(current)
      }
      return accumulator
    }, [])
  }

  locations = (events) => {
    return this.removeDuplicates(this.getLocations(events))
  }

  handleSelect = () => {
    
  }

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
    events: state.events
  }
}

const connectedFilter = connect(mapStateToProps, {})(Filter)

export default connectedFilter 