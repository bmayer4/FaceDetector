import React, { Component } from 'react';
import { connect } from 'react-redux';

class Rank extends Component {


    render() {
        return (
            <div>
            <div className='white f3'>
            {'You have detected:'}
            </div>
            <div className='white f1'>
            {
                `${this.props.auth.entries} photos`
            }
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}
  
export default connect(mapStateToProps)(Rank)
