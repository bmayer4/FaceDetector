import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        auth ? (
            <Redirect to="/" />
        ) : (
            <Component {...props}/> 
        )
    )}/>
);

const mapStateToProps = (state) => ({
    auth: !!state.auth    //null becomes false
});

export default connect(mapStateToProps)(PublicRoute);