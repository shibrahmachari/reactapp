import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import { link } from 'react-router-dom';
>>>>>>> reactapp

const Navbar =props=>{
   
        return (
            <nav className="navbar bg-primary">
                <h1>
                  <i className={this.props.icon} /> {this.props.title}
<<<<<<< HEAD
                </h1>>
=======
                </h1>
                <ul>
                 <li>
                 <link to="/">Home</link>
                </li>   
                <link to='/about'> About</link>
                 </ul>   
>>>>>>> reactapp
            </nav>
        );
    
}

Navbar.defaultProps={
    title:'Github-finder',
    icon: 'fab- fa-github'
};
Navbar.PropTypes={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
