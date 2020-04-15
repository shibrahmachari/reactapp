import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
>>>>>>> reactapp

const Useritem =props=> {

        const{login, id, avatar_url, html_url}=props.user;
        return (
            <div className="card textx-center">
                <img src={avatar_url} alt="" className="round-img" style= {{width:'10px'}}/>
               <h3>{id}</h3>
               <div>
<<<<<<< HEAD
                   <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
=======
                   <link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</link>
>>>>>>> reactapp
                   </div>
            </div>
        );
    
}
Useritem.propTypes={
    user:PropTypes.object.isRequired
};

export default Useritem
