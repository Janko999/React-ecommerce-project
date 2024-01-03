import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'


const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center '>
                <img src='images/newsletter.png' alt='newsletter'/>
                <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Your Email Address Here..." 
                  aria-label="Your Email Address Here..." 
                  aria-describedby="basic-addon2"
                />
                <span 
                  className="input-group-text p-2" 
                  id="basic-addon2">
                    Subscribe
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>
      
      <footer className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact us</h4>
              <div>
                <address className='text-white fs-6'>
                  Address: Dono Popov 34 <br/>
                  Kavadarci, Macedonia <br/>
                  Postal Code: 1430
                </address>
                <a href='tel:+38975789053' className='mt-4 d-block mb-1 text-white'>
                  +(389)75 789 053
                </a>
                <a href='mailto:jane@magneu.com' className='mt-2 d-block mb-0 text-white'>
                  jane@magneu.com
                </a>
                <div className='social_icons d-flex align-items-center gap-15 mt-4'>
                  <a to='#'>
                    <BsLinkedin className='text-white fs-4'/>
                  </a>
                  <a to='#'>
                    <BsGithub className='text-white fs-4'/>
                  </a>
                  <a to='#'>
                    <BsInstagram className='text-white fs-4'/>
                  </a>
                  <a to='#'>
                    <BsFacebook className='text-white fs-4'/>
                  </a>
                  <a to='#'>
                    <BsYoutube className='text-white fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to='refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to='shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to='terms-and-conditions' className='text-white py-2 mb-1'>Terms of Service</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Size Chart</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Accsesories</Link>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>SMart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by ToMarket</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer