import React from "react";
import Axios from "axios";
import Div from "./divs";
import {Link} from 'react-router-dom';

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
      <div>
        <h1>What's For Dinner?</h1>
        <Div data={this.state.data}/>
        <button><Link to={'/menu'}>Try Again!</Link></button>
        <button><Link to={'/'}>Back</Link></button>
        <button><Link to={'/recipes'}>Recipes</Link></button>
      </div>

      </>
    )
  }
}

export default NewMainPage;