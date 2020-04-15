import React, {useContext} from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
const  Users =()=> {
    const githubContext= userContext(GithubContext);
    const {loading, user}= githubContext;
  if(loading){
      return <Spinner/>
  }
      else{
            return (
            <div style={userStyle}>
                {users.map(user=>(
                    <Useritem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}
const userStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3,1f)',
    griGap:'1rem'
}
Users.propTypes={
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
export default Users

