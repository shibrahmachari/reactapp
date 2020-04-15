import React, { userReducer} from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer' ;
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
}from '../types';

const GithubState= props ={
    const initialState ={
        users: [],
        user: {},
        repos: [], 
        loading: false
    }

    const [state, dispatch]= userReducer(GithubReducer, initialState);

    const searchUsers=async text=>{
   setLoading();
    const res=  await axios.get
    (`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secrets=${REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    dispatch({
        type:SEARCH_USERS,
        payload: res.data
    });
 
  };
    // clears user from state
 const clearUsers=()=>dispatch({type:CLEAR_USERS});
    const setLoading = ()=> dispatch({type: SET_LOADING});

    return <GithubContext.Provider
    value={{
        users:state.users,
        user:state.user,
        repos: state.repos,
        loading:state.loading,
        searchusers
    }}
    >
    {props.children}
    </GithubContext.Provider>
}

export default GithubState