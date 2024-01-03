import React from 'react'
import Meta from '../components/Meta'
import {AiOutlineHome} from 'react-icons/ai'
import {IoMdCall, IoMdTime} from 'react-icons/io'
import {BsEnvelope} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
         <Meta title = {"Contact"}/>
         <div className='contact-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
              <div className='row'>
                <div className='col-12'>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.577056174078!2d21.43327908188915!3d41.98944366107864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415c9c154a0a5%3A0x8294c7154aaa2433!2s11th%20October%20St.%2034%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1697314316856!5m2!1sen!2smk" 
                    width="100%"
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div className='col-12 mt-5'>
                  <div className='contact-inner-wrapper d-flex justify-content-between'>
                    <div>
                      <h3 className='contact-title mb-4'>Contact us</h3>
                      <form action='' className='d-flex flex-column gap-15'>
                        <div>
                          <input type='text' className='form-control' placeholder='Name'/>
                        </div>
                        <div>
                          <input type='text' className='form-control' placeholder='Email'/>
                        </div>
                        <div>
                          <input type='tel' className='form-control' placeholder='Mobile number'/>
                        </div>
                        <div>
                          <textarea 
                            name='' 
                            id='' 
                            cols="30" 
                            rows="5" 
                            type='text' 
                            className='w-100 form-control'
                            placeholder='Message'
                          />
                        </div>
                        <div>
                          <button className='button border-0'>Submit</button>

                        </div>
                      </form>
                    </div>
                    <div>
                      <h3 className='contact-title mb-4'>Get in touch</h3>
                      <div>
                        <ul className='ps-0'>
                          <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                            <AiOutlineHome/>
                            <address className='mb-0'>Dono Popov 34, Kavadarci, Macedonia</address>
                          </li>
                          <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                            <IoMdCall />
                            <a href='tel:+(389)75 789 053'>+(389)75 789 053</a>
                          </li>
                          <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                            <BsEnvelope />
                            <a href='mailto:kostovjane23@gmail.com'>
                              kostovjane23@gmail.com
                            </a>
                          </li>
                          <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                            <IoMdTime/>
                            <p className='mb-0'>Monday-Friday 09 AM - 17 PM</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
    </>
  )
}

export default Contact