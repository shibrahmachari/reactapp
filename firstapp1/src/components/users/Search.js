import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:''
    };
    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.func.isRequired,
        setAlert:PropTypes.func.isRequired
    }
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    };
    onSubmit=(e)=>{
       e.preventDefault();
       if(this.state.text==''){
           this.props.setAlert('please enter something', light);
       }else{
       searchUsers(this.state.text);
       this.setState({text:''});
       }
    }
    render() {
        const {searchUsers, showClear, clearUsers}=this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                <input type="text"  name="text" placeholder="search  users.." value={this.state.text}
                onChange={this.onChange} />
                <input type="submit" value="search" className="btn btn-dark btn-block" />
                </form>
               {showClear && ( <button 
                className='btn btn-light btn-block'
                onClick={clearUsers}> 
                clear
                </button>)}
            </div>
        )
    }
}

export default Search
