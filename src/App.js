import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from './Component/Checkout';
import Login from './Component/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Component/StateProvider';
import Payment from './Component/Payment';
import Footer from './Component/Footer';
function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("the user is", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<><Header /><Home /></>}></Route>
          <Route path='/checkout' element={<><Header /><Checkout /></>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/payment' element={<><Header /><Payment/></>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
