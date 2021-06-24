import React from 'react'
import { useUserStore } from '../stores/userStore'
import Signup from './../components/Signup';
import Login from './../components/Login';


const LoginScreen = () => {
    const switchAuth = useUserStore(state => state.switchAuth)
    // console.log(switchAuth)
    return (
        switchAuth ? <Signup /> : <Login />
    )

}

export default LoginScreen

