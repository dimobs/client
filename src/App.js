import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import './App.css';
import Salute from './services/Salute/Salute';
import { Routes, Route } from 'react-router-dom';
// import { NotFound } from './pages/error/NotFound';
import { Producs } from './pages/producs/Producs';
import { Home } from './pages/home/Home';
import { Login1 } from './pages/loginPage/Login1';
import Register from './pages/loginPage/Register';
import { CreatePay } from './pages/CreatePay';


function App() {
    return (
        <div>
            <Header />
            <Salute />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createPay" element={<CreatePay />} />
        {/* <Route path="/login" element={<Register />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}
                {/* <Route path='*' element={<NotFound />} /> */}

                {/* <Route path='/products/:productId' element={<Producs />} /> */}

                {/* <Login1 /> */}

                {/* <Search /> */}
                {/* <Login /> */}
                {/* <Register /> */}
                {/* <UserList /> */}

        </Routes>
                <Footer />
        </div>
    );
}

export default App;
