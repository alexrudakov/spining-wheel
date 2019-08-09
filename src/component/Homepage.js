import React from 'react';
import Div from './divs';
import {Link} from 'react-router-dom';


class Homepage extends React.Component{

  render(){
    return (
      <div>
        <h1>What's For Dinner?</h1>
        <button><Link to={'/menu'} >Click Me</Link></button>
      </div>
    )
  }
}

export default Homepage;