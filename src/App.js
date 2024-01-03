import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blog from './pages/Blog';
import CompareProducts from './pages/CompareProducts';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpass from './pages/Forgotpass'
import Signup from './pages/Signup'
import Resetpass from './pages/Resetpass';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element= {<Layout />} >
                        <Route index element= {<Home />} />
                        <Route path='about' element= {<About />} />
                        <Route path='contact' element= {<Contact />} />  
                        <Route path='store' element= { <Store />} />
                        <Route path='store/product/:id' element={<SingleProduct/>} />
                        <Route path='blogs' element= { <Blog/>}/>
                        <Route path='blog/:id' element= {<SingleBlog/>} />
                        <Route path='cart' element= { <Cart/>}/>
                        <Route path='checkout' element= { <Checkout/>}/>
                        <Route path='compare-products' element= { <CompareProducts />}/>
                        <Route path='wishlist' element= { <WishList />}/>
                        <Route path='login' element= { <Login />}/>
                        <Route path='forgot-password' element= { <Forgotpass />}/>
                        <Route path='signup' element= { <Signup />}/>
                        <Route path='resetpass' element= {<Resetpass/>} />
                        <Route path='privacy-policy' element= {<PrivacyPolicy/>} />
                        <Route path='refund-policy' element= {<RefundPolicy/>} />
                        <Route path='shipping-policy' element= {<ShippingPolicy/>} />
                        <Route path='terms-and-conditions' element= {<TermsAndConditions/>} />
                        


                    </Route> 
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
