import React, { Component } from 'react';
import TeamSlide from './TeamSlide';
import InputSlide from './InputSlide';

class Contact extends Component {
    
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
                <TeamSlide />
                <InputSlide />
            </div>
    );
  }
}

export default Contact;