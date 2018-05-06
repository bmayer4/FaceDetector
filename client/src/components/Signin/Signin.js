import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinUser } from '../../actions';

class Signin extends Component {

    state = {
      email: '',
      password: ''
    }

    emailChange = (e) => {
      const email = e.target.value
      this.setState({ email })
    }
  
    passwordChange = (e) => {
      const password = e.target.value
      this.setState({ password })
    }
  
    submitForm = (e) => {
      e.preventDefault();
      let { email, password } = this.state;
      if (email && password) {
         this.props.signinUser({email, password});
      }
    }

    render() {
      return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{ marginTop: '100px' }}>
        <form className="pa4 black-80" onSubmit={this.submitForm}>
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0" style={{ fontWeight: '300'}}>Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.emailChange} value={this.state.email}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.passwordChange} value={this.state.password}/>
            </div>
          </fieldset>
          <div><span className="member-link">Not registered? <Link to={'/register'} className="signin-link">Register</Link></span></div>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
        </div>
      </form>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      signinUser: (data) => { dispatch(signinUser(data)) }
  }
}


export default connect(null, mapDispatchToProps)(Signin)