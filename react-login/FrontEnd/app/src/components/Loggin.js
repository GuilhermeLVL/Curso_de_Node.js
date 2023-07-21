import axios from "axios";
import { useState } from "react";

function Login(){

const [email, setEmail] = useState ('')
const [password, setPassword] = useState ('')
const [error, setError] = useState ('')

const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try{
         const response = await axios.post ('http://localhost:3000/login', JSON.stringify({email, password}), {headers: {'Content-Type': 'application/json'}});
    }catch (error) {
        if(!error?.response){
            setError('Erro ao acessar o servidor')
        }else if(error.response.status == 401){
            setError('Usario ou senha invalidos')
        }




    return(
    <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form'>
            <input type='email' name='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)}></input>
            <input type='password' name='password' placeholder='Password' required
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button 
            type='submit'
            className='btn-login'
            onClick={(e) => handleLogin(e)}
            
              >Login</button>
            
            </form>

            <p>{error}</p>
          </div>
    )
  }

  export default Login