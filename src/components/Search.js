import React, { Component } from 'react';

class Search extends Component {
    
    constructor(props){
        super(props);
        console.log('constructed');
    }
    
    render() {
        return (
            <div className="search-slide">
                <div className="login-card">
                    <h1>Search</h1>
                </div>
            </div>
    );
  }
}

export default Search;