import React, { useState } from 'react'
import "./LoginForm.css"
import fire from '../../config/Fire'
import { XCircle } from 'react-bootstrap-icons'
import SignUp from '../SignUp/SignUp'

const LoginForm = ( { Login, error, setShown } ) => {
    const [details, setDetails] = useState({name: "", email: "", password: ""})
    

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }
    const closeHandler = e => {
        e.preventDefault();
        setShown(false)
    }

    const [user, setUser] = useState({user: 1, isLoading: true, formSwitcher: false})
    const componentDidmount = () => {
    authListener()
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
            setUser(user.user)
            }else{
            setUser({user:null})
            }
        })
    }
    
    return (
        <>
            {!user.formSwitcher &&             
                <form className="login-form" >
                    <div className="loginForm-container">
                        <button id="close-button" type="button" onClick={closeHandler}> <XCircle  /></button>

                        <h2>Login</h2>
                        {(error !== "") ? ( <div className="error">{error}</div>) : "" }
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                        </div>
                        <p>Don't have an account yet? <button type="button"  id="register">Register</button> </p>
                        <div className="form-group" >
                            <input type="submit" value="Login" onClick={submitHandler} id="login-btn"/>
                        </div>
                    </div>
                </form>
            }
            {user.formSwitcher && <SignUp />}

        </>
    )
}


export default LoginForm
