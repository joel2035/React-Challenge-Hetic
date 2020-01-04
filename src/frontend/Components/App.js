import React, {Component} from 'react';
import StudentListItem from './StudentListItems';
import StudentForm from './StudentForm'
import StudentInfo from './StudentInfo'
import Connexion from './Connexion';
import AuthContextProvider from '../contexts/AuthContext';

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{

  componentWillUnmount() {
    //ici changer le context ou le détruire
  }

  render(){
    return(
      <AuthContextProvider>
        <Router>
          <Switch>
              <Route exact path="/" component={Connexion}/>
              <Route exact path="/formulaire" component={StudentForm}/>  
              <Route path ="/list" component = {StudentListItem}/>
              <Route path ="/info" component = {StudentInfo}/>
          </Switch>    
        </Router>
      </AuthContextProvider>
      )
  }
}
export default App;

