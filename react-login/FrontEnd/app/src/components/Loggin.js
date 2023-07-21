function Login(){

const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Loginm clicked');
}




    return(
    <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form'>
            <input type='email' name='email' placeholder='Email' required></input>
            <input type='password' name='password' placeholder='Password' required></input>
            <button type='submit' className='btn-login' onClick={(e) => handleLogin(e)}>Login</button>
            
            </form>
          </div>
    )
  }

  export default Login