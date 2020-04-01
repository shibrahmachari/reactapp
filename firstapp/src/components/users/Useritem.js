import React from 'react';

const Useritem =props=> {

        const{login, id, avatar_url, html_url}=props.user;
        return (
            <div className="card textx-center">
                <img src={avatar_url} alt="" className="round-img" style= {{width:'10px'}}/>
               <h3>{id}</h3>
               <div>
                   <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
                   </div>
            </div>
        );
    
}
Useritem.propTypes={
    user:PropTypes.object.isRequired
};

export default Useritem
