import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import View from './components/View.js'
import Filter from './components/Filter'

function App() {
  return (
    <div>
      <Filter className="Search" />
      <View className="View" />
    </div>
  );
}



const connectedApp = connect(null, {})(App)

export default connectedApp;
