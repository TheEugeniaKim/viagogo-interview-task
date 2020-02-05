import React from 'react'; 
import './App.css';
import {connect} from 'react-redux'
import {json} from './eventlist'
import View from './components/View.js'
import Filter from './components/Filter'
import AdvancedFilter from './components/AdvancedFilter'
import {getEvents} from './redux/actions'

class App extends React.Component {

  componentDidMount(){
    return this.props.getEvents(json.Items)
  }

  render(){
    return (
      <div className="App">
        <div className="filter-container">
          <Filter className="Filter" />
          <AdvancedFilter />
        </div>
        <View className="View" />
      </div>
    )
  }
}

const connectedApp = connect(null, {getEvents})(App)

export default connectedApp;
