import React, { Component } from 'react';
import LandingSlide from './LandingSlide';
import CovidSlide from './CovidSlide';

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {user:props.user, name: '', isOpen:false};
        this.addPlayers = this.addPlayers.bind(this);
        this.selectLeague = this.selectLeague.bind(this);
    }

    addPlayers(){
        this.props.history.push('/add');
    }

    selectLeague(){
        this.props.history.push('/leagues');
    }
    
    render() {
        return (
            <div>
                <LandingSlide />
                <CovidSlide />
            </div>
    );
  }
}

export default Home;