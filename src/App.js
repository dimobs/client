import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import './App.css';
import Salute from './services/Salute/Salute';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import { NotFound } from './pages/error/NotFound';
import { Producs } from './pages/producs/Producs';
import { Home } from './pages/home/Home';
import { Login1 } from './pages/loginPage/Login1';
import Register from './pages/loginPage/Register';
import { CreatePay } from './pages/pays/CreatePay';
import { useState } from 'react';
import uniqid from 'uniqid'
import { HistoryPage } from './pages/pays/HistoryPage';

function App() {
    const [pay, setPay] = useState([]);
const navigate = useNavigate();

const addPayHandler = (payData) => {
setPay(state => [
    ...state, {
        ...payData,
        _id: uniqid 
    }
]);

navigate('/historyPay')
}

    return (
        <div>
            <Salute />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login1 />} />
                <Route path="/register" element={<Register />} />
                <Route path="/createPay" element={<CreatePay addPayHandler={addPayHandler}  />} />
                <Route path="/historyPay" element={<HistoryPage pays={pay}  />} />
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
        </div>
    );
}

export default App;
