<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Fragment, Component } from 'react';
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> reactapp
import './App.css';
import Navbar from './components/layout/Navbar';
import useritem from './components/users/Useritem';
import axios from 'axios';
<<<<<<< HEAD
class App extends Component { 
  state={
    users:[],
    loading: false
  }
 async  componentDidMount(){
   this.setState({loading:true});
      const res=  await axios.get('https://api.github.com/users');
      this.setState({ users:res.data, loading: false})
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <User loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
=======
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component { 
  state={
    users:[],
    repos:[],
    user:{},
    loading: false,
    alert:null
  }
 async  componentDidMount(){
   this.setState({loading:true});
      const res=  await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secrets=${REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ users:res.data, loading: false});
  }
  
  //searches the user from form input
  searchUsers=async text=>{
    this.setState({loading:false});
    const res=  await axios.get
    (`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secrets=${REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users:res.data.items, loading: false});
  };

  // get single user from github
  getUser= async(username)=>{
    this.setState({loading:true});
    
    const res=  await axios.get
    (`https://api.github.com/search/users/${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secrets=${REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user:res.data, loading: false});
  };
// get user repos
getUserRepos= async(username)=>{
  this.setState({loading:true});
  
  const res=  await axios.get
  (`https://api.github.com/search/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  &client_secrets=${REACT_APP_GITHUB_CLIENT_SECRET}`);

  this.setState({ repos:res.data, loading: false});
};


  // clears user from state
  clearUsers=()=>{
    this.setState({users:[], loading: false});
  };
  
  setAlert=(msg, type)=>{
this.setState({alert:{msg:msg, type:type}});
setTimeout(() => {
 this.setState({alert:null}); 
}, 5000);
  };

  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>
           <Route exact path='/' render={props=>(
             <Fragment>
              
             <Search searchUsers={this.searchUsers}
              clearUsers={this.clearUsers} 
              showClear={this.state.users.length>0? true: false}
              setAlert={this.setAlert} />
              <User loading={this.state.loading} users={this.state.users}/>
               </Fragment>
           )} />
           <Route exact path='/about' component={About}/>
           <Route exact path='/user/:login' render={props =>{
             <User {...props} 
             getUser={this.getUser} 
             getUserRepos={this.getUserRepos}
             repos={this.state.repos}
             user={this.state.user} 
             loading={this.state.loading}/>
           }}/>
         </Switch>  
        </div>
      </div>
      </Router>
>>>>>>> reactapp
    );
  }
}

export default App;
