import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions';
import { Link } from 'react-router-dom';

class Navigation extends Component {

        signoutUser = () => {
            this.props.signoutUser();
        }

        render() {
          return (
              <nav style={{ display: 'flex', justifyContent: 'flex-end', marginRight:'20px'}}>
              <Link to={'/'}><p className='f4 link dim black pa3 pointer white'>Home</p></Link>
              <Link to={'/profile'}><p className='f4 link dim black pa3 pointer white'>Profile</p></Link>
              <p className='f4 link dim black pa3 pointer white' onClick={this.signoutUser}>Sign Out</p>
              </nav>
          )
        }
}

const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            signoutUser: () => { dispatch(signoutUser()) }
        }
      }
      
export default connect(null, mapDispatchToProps)(Navigation)