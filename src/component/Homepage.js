import React from 'react';
import Div from './divs';
import {Link} from 'react-router-dom';
import "../App.css";
import Views from './images/main1.png';


class Homepage extends React.Component{

  render(){
    return (
      <div className='main'>
        <h1 className='main__header'>What's For Dinner?</h1>
        <div>
        <img src={Views} className='main__pic' alt='views' />
        </div>
        <button className='main__button'><Link to={'/menu'} >Click Me</Link></button>
      </div>
    )
  }
}

export default Homepage;