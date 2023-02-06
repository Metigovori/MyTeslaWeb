import React from 'react'



function Login() {



    const signIn = (e) => {

    };

  return (
    <div className='login'>
    
        <img src='/images/logo.svg' alt='Maqupiqu'/>
  


    <h1>Sign In</h1>

    <form >
        <h5>Email</h5>
        <input type="email"  />

        <h5>Password</h5>
        <input type="password" />

        <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
    </form>

    <p>
    By signing-in you agree to TESLA FAKE CLONE  Conditions of Use & Sale. Please see our Privacy Notice , our Cookies Notice and our Interest-Based Ads Notice.
    </p>
      
      <p>Or</p>

    <button type='submit'>
        Create Account
    </button>
    </div>
  )
}

export default Login;