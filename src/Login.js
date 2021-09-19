import './App.css';
import {useState} from 'react'

function Login({setIsLoggedIn}) {
    const [login, setLogin] = useState(false)
    const [userType, setUserType] = useState('user')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const showLogin = () => {
        setLogin(true)
    }

    const loginUser = async () => {
        let res = await fetch('/login', {
            method:'POST',
            body:JSON.stringify({username, password, is_workman: userType == 'worker' })
        })

        res = await res.json()
        setIsLoggedIn(true)
    }

    return (
        <>
            <div className='login-btn' style={{display: !login ? 'block' : 'none'}}>
            <button className='login' 
                    onClick={() => {
                        setUserType('user')
                        showLogin()}}>
                        Login as User
                </button>
            </div>

            <div className='login-btn' style={{display: !login ? 'block' : 'none'}}>
                <button className='login' 
                    onClick={() => {
                        setUserType('worker')
                        showLogin()}}>
                        Login as Worker
                </button>
            </div>

            <div id='login-modal' style={{display: login ? 'block' : 'none'}}>
    	        <div>
		    		<div className='loginmodal-container'>
		    			<h1>Login to Your Account</h1><br />
		    		  <form>
		    			<input type='text' name='user' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
		    			<input type='password' name='pass' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
		    			<button className='login loginmodal-submit' onClick={loginUser}>Login</button>
		    		  </form>
		    		</div>
		        </div>
		    </div>
        </>
    )
}

export default Login;