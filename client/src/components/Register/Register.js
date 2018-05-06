import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  nameChange = (e) => {
    const name = e.target.value
    this.setState({ name })
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
    let { name, email, password } = this.state;
    if (name && email && password) {
      this.props.registerUser({ name, email, password });
    }
  }

  render() {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{ marginTop: '100px' }}>
        <form className="pa4 black-80" onSubmit={this.submitForm}>
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0" style={{ fontWeight: '300'}}>Register</legend>
            <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={this.nameChange} value={this.state.name}/>
          </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.emailChange} value={this.state.email}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.passwordChange} value={this.state.password}/>
            </div>
          </fieldset>
          <div className="">
            <div><span className="member-link">Already a member? <Link to={'/signin'} className="signin-link">Signin</Link></span></div>
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
          </div>
        </div>
      </form>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      registerUser: (data) => { dispatch(registerUser(data)) }
  }
}

export default connect(null, mapDispatchToProps)(Register)