
import React, {Fragment, useState} from 'react';
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User  from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';
import GithubState from './context/github/GithubState';

const App =()=> { 
  const[users, setUsers]= userState([]);
  const[user, setUser]= userState({});
  const[repos, setRepos]= userState([]);
  const[loading, setLoading]= userState(false);
  const[alert, setAlert]= userState(null);
  
  
  //searches the user from form input
 
  // get single user from github
 const getUser= async(username)=>{
    setLoading(true);
    const res=  await axios.get
    (`https://api.github.com/search/users/${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secrets=${REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  };

// get user repos
const getUserRepos= async(username)=>{
  setLoading(true);
  
  const res=  await axios.get
  (`https://api.github.com/search/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  &client_secrets=${REACT_APP_GITHUB_CLIENT_SECRET}`);
   setRepos(res.data);
   setLoading(false);
};


  // clears user from state
 const clearUsers=()=>{
    setUsers([]);
    setLoading(false);
  
  };
  
const  showAlert=(msg, type)=>{
    setAlert({msg,type});
setTimeout(() => {
    setAlert(null);
}, 5000);
  };

 
    return (
      <GithubState>
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={alert}/>
        <Switch>
           <Route exact path='/' render={props=>(
             <Fragment>
              
             <Search 
              clearUsers={clearUsers} 
              showClear={users.length>0? true: false}
              showAlert={showAlert} />
              <User loading={loading} users={users}/>
               </Fragment>
           )} />
           <Route exact path='/about' component={About}/>
           <Route exact path='/user/:login' render={props =>{
             <User {...props} 
             getUser={getUser} 
             getUserRepos={getUserRepos}
             repos={repos}
             user={user} 
             loading={loading}/>
           }}/>
         </Switch>  
        </div>
      </div>
      </Router>
      </GithubState>
    );

}

export default App;