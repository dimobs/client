import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import './App.css';
import Salute from './services/Salute/Salute';

function App() {
    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Salute />

                    <Search />
                    <UserList />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
