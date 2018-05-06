import axios from 'axios';

export const checkAuth = () =>
async (dispatch, getState) => {
    const res = await axios.get('/api/auth').catch((e) => {
        console.log(e);
    });
    if (res) {
        dispatch({
            type: 'LOGIN_AUTH',
            payload: res.data
        })
    }
    }

export const signinUser = ({ email, password }) => 
    async (dispatch, getState) => {
        const res = await axios.post('/api/signin', { email, password });

            dispatch({
                type: 'LOGIN_AUTH',
                payload: res.data
            })
    }

export const registerUser = ({ name, email, password }) =>
    async (dispatch, getState) => {
        const res = await axios.post('/api/register', { name, email, password });

            dispatch({
                type: 'LOGIN_AUTH',
                payload: res.data
            })
    }


export const signoutUser = () => 
    async (dispatch, getState) => {
        const res = await axios.delete('/api/signout');

        if (res) {
            dispatch({
                type: 'LOGOUT_AUTH',
                payload: res.data
            })
        }
    }

