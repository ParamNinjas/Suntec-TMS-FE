import React from 'react';
import logo from './logo.svg';
import './index.css';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Signup from './components/Signup';
import PassChange from './components/PassChange';
import Confirm from './components/Confirm';
import Dashboard from './Dashboard';
import Create from './components/orders/Create';
import Drivers from './components/Drivers/Drivers';
import Customer from './components/Customer/Customer';
import Admin from './components/admin';
import Navigation from './components/navigation';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={< Login />}></Route>
        <Route path='/createOrder' element={< Create />}></Route>
        <Route path='/drivers' element={< Drivers />}></Route>
        <Route path='/Signup' element={< Signup />}></Route>
        <Route path='/PassChange' element={< PassChange />}></Route>
        <Route path='/Confirm' element={< Confirm />}></Route>
        <Route path='/Dashboard' element={< Dashboard />}>
          <Route path=":id" element={<Dashboard />} />
        </Route>
        <Route path='/Customer' element={< Customer />}></Route>
        <Route path='/admin' element={< Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
