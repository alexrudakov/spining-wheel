import React from 'react';
import {Link} from 'react-router-dom';


class Recipes extends React.Component{
  render(){
    return(
      <div className="containerDiv">
        <h1>Recipes Page</h1>
        <div className="recipesHeader">Please Try Again</div>
        <button><Link to={'/menu'}>Try Again!</Link></button>
        <button><Link to={'/'}>Back</Link></button>
      </div>
    )
  }
}

export default Recipes;