
import './App.css';
import React, { useEffect, useState } from 'react'
import Buynow from './components/buynow/Buynow';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import NewNav from './components/newnavbaar/NewNav';
import Sign_in from './components/signup_sign/Sign_in';
import Sign_up from './components/signup_sign/Sign_up';
import { Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  const [data, setData] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);


  return (
    <>
      {
        data ? (
          <>
            <Navbar />
            <NewNav />
            <Routes>
              <Route path="/" element={<Maincomp />} />
              <Route path="/login" element={<Sign_in />} />
              <Route path="/register" element={<Sign_up />} />
              <Route path="/getproductsone/:id" element={<Cart />} />
              <Route path="/buynow" element={<Buynow />} />
            </Routes>
          </>
        ) : (
          <div className='circle'>
            <CircularProgress />
            <h2 style={{fontSize:20}}>Loading...</h2>
          </div>
        )
      }

    </>
  );
}

export default App;
