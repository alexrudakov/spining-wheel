import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './component/NewMainPage';
import Recipes from './component/Recipes';
import Homepage from './component/Homepage';



class App extends React.Component{
  render(){
    return(
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/menu"  component={Main} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
      </Router>
    )
  }
}

export default App;
