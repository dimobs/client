import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import './App.css';
import Salute from './services/Salute/Salute';
// import { Login } from './pages/loginPage/Login';
import Login1 from './pages/loginPage/Login1';
import {Routes, Route} from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Producs } from './pages/producs/Producs';


function App() {
    return (
        <div>
       <Header />
    <Routes>
                <Route path='*' element={<NotFound />} />
                            
                <Route path='/search' element={<Search />} />
                                <Route path='/products/:productId' element={<Producs />} />

                    {/* <Salute /> */}
            {/* <Login1 /> */} 

                    {/* <Search /> */}
                    {/* <Login /> */}
                    {/* <Register /> */}
                    {/* <UserList /> */}

            {/* <Footer /> */}
            </Routes>
        </div>
    );
}

export default App;
