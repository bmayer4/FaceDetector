import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (   
        auth ? (
            <div>
            <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/signin" />
        )
    )}/>
);

// const mapStateToProps = (state) => ({
//     auth: !!state.auth
// });

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: !!state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute);