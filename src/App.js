import logo from './assets/logo-dimo.png';
import './App.css';
import BookList from './pages/BookList';

const books = [
    {"title": "Word of the rigns", "author": "Lepa brena", "year": 1980},
  {"title": "Word of the rigns", "author": "Lepa brena", "year": 1981},
  {"title": "Word of the rigns", "author": "Lepa brena", "year": 1982},
  {"title": "Word of the rigns", "author": "Lepa brena", "year": 1983},
  {"title": "Word of the rigns", "author": "Lepa brena", "year": 1984},
  {"title": "Word of the rigns", "author": "Lepa brena", "year": 1985},
  {"title": "Word of the rigns", "author": "Lepa brena", "year": 1986},
]

function App() {
  return (
    <div className="App">
      <header className="header">
        <ul>
          <li><a href="/"><img src={logo} className="App-logo" alt="logo" /></a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </header>
      <div className="header_bottom"></div>    
      <BookList books={books} />
    </div>
  );
}

export default App;
