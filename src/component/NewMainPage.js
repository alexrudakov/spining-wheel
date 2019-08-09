import React from "react";
import Axios from "axios";
import Div from "./divs";
import { Link } from 'react-router-dom';
import '../App.css';

class NewMainPage extends React.Component {
  state = {
    data: { categories: [] },
    recipes: {},
    random: {}
  };
  getData = () => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      response => {
        this.setState({
          data: response.data
        });
        this.getItem();
      });
  };

  getItem = () => {
    const number = String(Math.floor(Math.random() * 12) + 1);
    let filtered = this.state. data.categories.find(item => {
      if (item.idCategory ===number) {
        this.setState({
          random: item
        })
        return item;
      }
    });
    this.getRecipes(filtered);
  };

  getRecipes = (filtered) => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filtered.strCategory}`)
    .then(response =>{
      this.setState({
        recipes: response
      })
    })
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(){
    if(this.state.random.id !== this.props.match.params.id && this.props.match.params.id){
      Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          random: response
        })
      })
    }
  }
  render() {
    console.log(this.state);

    return (
      <>
        <div className="menu">
          <h1 className="menu">What's For Dinner?</h1>
          <Div random={this.state.random}/>
          <button className="menu__button1" type="button" onClick="window.location.reload();">
            <Link to={"/menu"}>Try Again!</Link>
          </button>
          <button className='menu__button2'>
            <Link to={"/"}>Back</Link>
          </button>
          <button className='menu__button3'>
            <Link to={"/recipes"}>Recipes</Link>
          </button>
        </div>
      </>
    );
  }
}

export default NewMainPage;
