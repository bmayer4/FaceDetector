import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Navigation from '../Navigation/Navigation';

class Profile extends Component {
    
    render() {
        const { name, email, entries, joined } = this.props.auth;
        return (
            this.props.auth ?
            <div>
            <Navigation />
            <div className='profile'>
            <h2>Profile</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>Face detections: {entries}</p>
            <p>Joined: {moment(joined).format("MMM Do YYYY")}</p>
            </div>
            </div> : null
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}
  
export default connect(mapStateToProps)(Profile)