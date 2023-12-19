import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import './App.css';
import { Footer } from './footer/footer';
import { Header } from './header/navbar';
import { Bestselling } from './pages/bastselling';
import { Collection } from './pages/collection';
import { Service } from './pages/service';
import { Themes } from './pages/themes';
import { Slider } from './slider/slider';
import { Home } from './pages/home';
import { Caps } from './pages/capproducts';
import { Capsproductdetail } from './details/capsproductdetail';
import { Hoodies } from './pages/hoodiesproduct';
import { Hoodieproductdetail } from './details/hoodieproductdetail';
import { Mugsproduct } from './pages/mugsproduct';
import { Contactus } from './pages/contactus';
import { Aboutus } from './pages/aboutus';
import { Returnpolicy } from './pages/returnpolicy';
import { Login } from './pages/login';
import { Bestsellingdetail } from './details/bestsellingdetail';
import { Mugsproductdetail } from './details/mugsproductdetail';
import { Cart } from './pages/cart';
import { Buy } from './pages/payment';
import { Customerdetail } from './pages/customerdetail';
import { Mainlogin } from './firebasemain';
import { Emailmain } from './emaillogin/emailmain'
import { Emailregister } from './emaillogin/emailregister';
import { Googlemain } from './googlelogin/googlemain';
import { Googlelogin } from './googlelogin/googlelogin';
import { Facelogin } from './facelogin/facelogin';
import { Error } from './pages/error';
import { useState } from 'react';



function App() {
 

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Mainlogin />} />
            <Route path='/emaillogin' element={<Emailmain />} />
            <Route path='/googlemain' element={<Googlemain />} />
            <Route path='/googlelogin' element={<Googlelogin />} />
            <Route path='/register' element={<Emailregister />} />
            <Route path='/facelogin' element={<Facelogin />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/caps' element={<Caps />} />
            <Route path='/caps/capsdetails/:itemId' element={<Capsproductdetail />} />
            <Route path='/hoodies' element={<Hoodies />} />
            <Route path='/hoodies/hoodiesdetails/:hoodieId' element={<Hoodieproductdetail />} />
            <Route path='/mugs' element={<Mugsproduct />} />
            <Route path='/mugs/mugsdetails/:mugId' element={<Mugsproductdetail />} />
            <Route path='/contact' element={<Contactus />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/returnpolicy' element={<Returnpolicy />} />
            <Route path='/bestsellingdetail/:bestId' element={<Bestsellingdetail />} />
            <Route path='/caps/capsdetails/:itemId/bestsellingdetail/:bestId' element={<Bestsellingdetail />} />
            <Route path='/hoodies/hoodiesdetails/:hoodieId/bestsellingdetail/:bestId' element={<Bestsellingdetail />} />
            <Route path='/mugs/mugsdetails/:mugId/bestsellingdetail/:bestId' element={<Bestsellingdetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/customer' element={<Customerdetail />} />
            <Route path='/buy' element={<Buy />} />
            <Route path='/error' element={<Error />} />
          </Routes>
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
