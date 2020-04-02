import React, { Fragment, Component } from 'react';
import Spinner from './components/layout/spinner.gif';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Repos} from '../Repos/Repos';
export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
    static propTypes={
        loading:PropTypes.bool,
        user:PropTypes.object.isRequired,
        getUser:PropTypes.func.isRequired,
        getUserRepos:PropTypes.func.isRequired,
        repos:PropTypes.array.isRequired
    };
    render() {
        const{
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=this.props.user;

        const {loading, repos}=this.props;
        if(loading) return <Spinner />
        return <Fragment>
          <Link to='/' className='btn btn-light'>
              back to search
          </Link>
          Hireable:{' '}
          { hireable ? (
            <i className='fas fa-check text-success' />
          ):(
             <i className='fas fa-times-circle text-danger' />
          )}
          <div className="card grid-2">
          <div  className="all-center">
            <img src={avatar_url} className="round-img" alt="" style={{width:'150px'}}/>
            <h1>{name}</h1>
            <p>location: {location}</p>
          </div>
          <div>
              {bio&&(
                  <Fragment>
                      <h3>Bio</h3>
                      <p>{bio}</p>
                  </Fragment>   
              )}
              <a href={html_url} className="btn btn-dark my-1"> visit github profile</a>
              <ul>
                  <li>
                      {company&&<Fragment>
                       <strong>Company:</strong> {company}
                       </Fragment>
                      }
                   </li>  
                   <li>
                      {blog&&<Fragment>
                       <strong>WebBlog:</strong> {blog}
                       </Fragment>
                      }
                   </li>  
                   <li>
                      {login&&<Fragment>
                       <strong>Username:</strong> {login}
                       </Fragment>
                      }
                   </li> 
              </ul>    
           </div>  
           </div> 
           <div className='card text-center'>
           <div className='badge badge-primary'>Followers:{followers}</div>
           <div className='badge badge-success'>Following:{following}</div>
           <div className='badge badge-light'>Public_repos:{public_repos}</div>
           <div className='badge badge-dark'>Public_gists:{public_gists}</div>
          </div>
          <Repos repos={repos} />
        </Fragment>
        
    }
}

export default User
