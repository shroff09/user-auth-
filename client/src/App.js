import React, { Component } from 'react';
import Profile from './components/profile';
import Home from './components/home';
 
class App extends Component {
  render() {
    return (
      <div className={App}>
      <Profile/>
      <Home/>
      </div>
    );
  }
}

export default App;