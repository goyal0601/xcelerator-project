import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CardRouter from './Components/CardRouter/CardRouter';
class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
        <img src='quora.png' 
        style={{height:'32px',
        width:'150px',
        marginTop:'10px',
        backgroundColor:"#ffffff"}} 
        alt='quora'>
        </img>
        </div>
        <CardRouter />
      </div>
    );
  }
}

export default App;
