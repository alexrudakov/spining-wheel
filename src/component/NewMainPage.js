import React from "react";
import Axios from "axios";
import Div from "./divs";
import {Link} from 'react-router-dom';
import '../App.css';

class NewMainPage extends React.Component{
  state = {
    data: {categories: []},
    recipes: {meals: []}
  }
  getData = () => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      response => {
        this.setState({
          data: response.data
        });
      }
    );
  };

  componentDidMount(){
    this.getData();
  }

  // componentDidUpdate(){
  //   Axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  //   .then(
  //     respons => {
  //       this.setState({

  //       })
  //     }
  //   )
  // }

  render(){
    console.log(this.state.data.categories);
    
    return (
      <>
      <div className="menu">
        <h1 className='menu__header'>What's For Dinner?</h1>
        <Div data={this.state.data}/>
        <button className="menu__button1"><Link to={'/menu'}>Try Again!</Link></button>
        <button className='menu__button2'><Link to={'/'}>Back</Link></button>
        <button className='menu__button3'><Link to={'/recipes'}>Recipes</Link></button>
      </div>

      </>
    )
  }
}

export default NewMainPage;