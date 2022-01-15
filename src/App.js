import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() { //LifeCycle Mathod 
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}

