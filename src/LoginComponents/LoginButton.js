import React, {useState} from 'react'
import { PersonCircle } from 'react-bootstrap-icons'
import "./LoginButton.css"
import LoginForm from "./LoginForm/LoginForm"

function LoginButton() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email:""})
    const [error, setError] = useState("")
    const [isShown, setShown] = useState(false)

    const Login = details => {
    
      if (details.email === adminUser.email && details.password === adminUser.password){
        console.log("Logged in")
        setUser({
          name: details.name,
          email: details.email
        })
        setShown(false)
      } else {
        setError("Details do not match")
      }
    } 
  
    const Logout = () => {
      setUser({name: "", email: "", password: ""})
    }

    const showLoginForm = () => {
      setShown(true)
    }

    return (
        <div className="login-btn-container">
            {!isShown && <button id="login-button" onClick={showLoginForm}><PersonCircle id="icon" size="1x" /></button> }
            {isShown && <LoginForm Login={Login} error={error} setShown={setShown}/>}
            <h2> Welcome {user.name}</h2>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default LoginButton
