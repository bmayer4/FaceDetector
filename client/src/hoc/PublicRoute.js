import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        auth && auth.id ? (
            <Redirect to="/" />
        ) : (
            <Component {...props}/> 
        )
    )}/>
);

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PublicRoute);