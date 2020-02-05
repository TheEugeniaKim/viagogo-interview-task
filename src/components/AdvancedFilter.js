import React from 'react'

class AdvancedFilter extends React.Component {

  handleClick = () => {
    //This event handler would go to another page using react-router (which still has to be implemented)
    
  }

  render(){
    return (
      <div className="advanced-search-box">
        <h2 className="adv-search-header"> Advanced Search  </h2> 
        <button className="adv-search-btn" onClick={this.handleClick}> Click Here </button> 
      </div>
    )
  }
}

export default AdvancedFilter