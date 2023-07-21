import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='login-form-wrap'>
          <h2>Login</h2>
          <form className='login-form'>
          <input type='email' name='email' placeholder='Email' required></input>
          <input type='password' name='password' placeholder='Password' required></input>
          
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
