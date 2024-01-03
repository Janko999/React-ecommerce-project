import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


const Checkout = () => {
    return (
        <>
            <section className='checkout-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>ToMarket.</h3>
                                <nav aria-label="breadcrumb" className='border-bottom'>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/cart">Cart</a></li>
                                        <li className="breadcrumb-item active" aria-current="page"><a href='#' className='text-dark active'>Informations</a></li>
                                        <li className="breadcrumb-item active" aria-current="page"><a href='#'>Shipping</a></li>
                                        <li className="breadcrumb-item active" aria-current="page"><a href='#'>Payment</a></li>
                                    </ol>
                                </nav>
                                <div className='border-bottom py-3'>
                                    <h4 className='title'>
                                        Contact Information
                                    </h4>
                                    <p className='user-details mb-0'>Jane Kostov (kostovjane23@gmail.com)</p>
                                </div>
                               
                                <h4 className='my-3'>Shipping Address</h4>
                                <form action='' className="gap-15 justify-content-between mb-3 border-bottom">
                                    <div className='w-100 mb-3'>
                                        <select class="form-select w-100" aria-label="Default select example">
                                            <option selected>Saved address</option>
                                            <option value="1">Use new address</option>
                                        </select>
                                    </div>
                                    <div className='d-flex gap-15 mb-3'>
                                        <div className='w-50'>
                                            <input type='text' placeholder='First Name (optional)' className='form-control' />
                                        </div>
                                        <div className='w-50'>
                                            <input type='text' placeholder='Last Name' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='w-100 mb-3'>
                                        <input type='text' placeholder='Address' className='form-control' />
                                    </div>
                                    <div className='w-100 mb-3'>
                                        <input type='text' placeholder='Appartment, building, floor, etc...' className='form-control' />
                                    </div>
                                    <div className='d-flex gap-15'>
                                        <select class="form-select w-100" aria-label="Default select example">
                                            <option selected disabled>City</option>
                                            <option value="1">Skopje</option>
                                            <option value="1">Kavadarci</option>
                                        </select>
                                        <div className='w-100'>
                                            <fieldset disabled>
                                                <input type='text' id="disabledTextInput" placeholder='North Macedonia' className='form-control' />
                                            </fieldset>
                                        </div>
                                        <div className='w-100'>
                                            <input type='number' placeholder='ZIP code' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center my-3'>
                                        <div className='d-flex align-items-center'>
                                            <IoIosArrowBack className='me-2'/>
                                            <Link to='/cart'>Return to cart</Link>
                                        </div>
                                        <div>
                                            <Link to='/shipping' className='button'>Continue to shipping</Link>
                                        </div>
                                    </div>
                                </form>

                            
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4 '>
                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='d-flex align-items-center w-75 gap-15'>
                                        <div  className='w-25 position-relative'>
                                            <span className='badge bg-secondary text-white rounded-circle position-absolute'  style={{"right":"0" , "top":"-10px"}}>1</span>
                                            <img src='../images/watch.jpg' className='img-fluid border border-1'/>
                                        </div>
                                        <div>
                                            <h5 className='title'>Headphones for kids</h5>
                                            <p>S/ #265+515</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end align-items-center flex-grow-1 '>
                                        1000$
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center w-75 gap-15'>
                                        <div  className='w-25 position-relative'>
                                            <span className='badge bg-secondary text-white rounded-circle position-absolute'  style={{"right":"0" , "top":"-10px"}}>1</span>
                                            <img src='../images/watch.jpg' className='img-fluid border border-1'/>
                                        </div>
                                        <div>
                                            <h5 className='title'>Headphones for kids</h5>
                                            <p>S/ #265+515</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end align-items-center flex-grow-1 '>
                                        1000$
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom my-2'>
                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                    <small className='subtotal'>Subtotal</small>
                                    <div className='d-flex align-items-center'>
                                        <small className='me-2' >USD</small>
                                        <small className='text-dark'>$2000.00</small>
                                    </div>
                                </div>
                                <div  className='d-flex justify-content-between align-items-center mb-2'>
                                    <small className='shipping'>Shipping</small>
                                    <div className='d-flex align-items-center'>
                                        <small className='me-2' >USD</small>
                                        <small className='text-dark'>$190.65</small>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='d-flex justify-content-between align-items-center py-2'>
                                <h5 className='total'>Total</h5>
                                <div className='d-flex align-items-center'>
                                    <small className='me-2' >USD</small>
                                    <h4 className='total-price'>$2190.65</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout