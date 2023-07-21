function Login(){

    return(
    <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form'>
            <input type='email' name='email' placeholder='Email' required></input>
            <input type='password' name='password' placeholder='Password' required></input>
            <button type='submit' className='btn-login'>Login</button>
            
            </form>
          </div>
    )
  }

  export default Login