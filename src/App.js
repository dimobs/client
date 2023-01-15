import './App.css';
import BookList from './pages/BookList';
import { LoadingFetch } from './pages/LoadingFetch';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Salute from './layouts/Salute';

const books = [
  { "title": "Word of the rigns", "author": "Lepa brena", "year": 1980 },
  { "title": "Word of the rigns", "author": "Lepa brena", "year": 1981 },
  { "title": "Word of the rigns", "author": "Lepa brena", "year": 1982 },
  { "title": "Word of the rigns", "author": "Lepa brena", "year": 1983 },
  { "title": "Word of the rigns", "author": "Lepa brena", "year": 1984 },
  { "title": "Word of the rigns", "author": "Lepa brena", "year": 1985 },
  { "title": "Word of the rigns", "author": "Lepa brena", "year": 1986 },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Salute />
      <LoadingFetch />
      <BookList books={books} />
      <Footer />
    </div>
  );
}

export default App;
