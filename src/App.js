import logo from './logo-dimo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <ul>
          <li><a href="/"><img src={logo} className="App-logo" alt="logo" /></a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>


      </header>
      <div class="header_bottom"></div>
    </div>
  );
}

export default App;
