import "./SignUp.css"
import React, { useState } from 'react'
import fire from "../../config/Fire"

function SignUp() {
    const [details, setDetails] = useState({name: "", email: "", password: "", fireErrors: ""})
    const [error, setError] = useState("Try lang")
    const handleChange = e => {
        e.preventDefault()
        setDetails(details)
    }

    const register = e => {
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(details.email, details.password).then((user) => {
            var currentUser = fire.auth().currentUser
            currentUser.updateProfile({
                name: details.name
            }).catch((error) => {
                setDetails(error)
            })
        })
    }
    return (
        <div className="signup-container">
             <h2>Register</h2>
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
            {/* <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={details.password}/>
            </div> */}
            <p>I agree to the <a href="#" id="register">terms & condition</a> </p>
            {/* <div className="form-group" >
                <input type="submit" value="Login" onClick={submitHandler} id="login-btn"/>               
            </div> */}
            <div className="form-group" >
                <input type="submit" value="Register" onClick={register} id="register-btn"/>               
            </div>

        </div>
    )
}

export default SignUp
 