import React, { Component } from 'react';
import AboutSlide from './AboutSlide';
import FeatureSlide from './FeatureSlide';
import PartnerSlide from './PartnerSlide';

class About extends Component {
    
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
                <AboutSlide />
                <FeatureSlide />
                <PartnerSlide />
            </div>
    );
  }
}

export default About;