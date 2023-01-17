import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import './App.css';
import Salute from './services/Salute/Salute';
import { Login } from './pages/loginPage/Login';
import { Register } from './pages/loginPage/Register';

function App() {
    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Salute />

                    <Search />
                    <Login />
                    {/* <Register /> */}
                    <UserList />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
