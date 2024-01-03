import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { BiSolidTrash } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Cart = () => {
  return (
    <>
        <Meta title = {"Cart"}/>
        <BreadCrumb title={"Cart"}/>
        <section className='cart-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img src='../images/watch.jpg' className='img-fluid'/>
                                </div>
                                <div className="w-75">
                                    <h5 className='title'>Headphones for kids</h5>
                                    <p className='size'>Size: L</p>
                                    <p className='color'>Color: Red</p>
                                </div>
                            </div>
                            <div className='cart-col-2 d-flex align-items-center'>
                                <h5 className='price'>$100</h5>
                            </div>
                            <div className='cart-col-3 gap-10 d-flex align-items-center'>
                                <div>
                                    <input 
                                        type='number' 
                                        className='form-control'
                                        min={1}
                                        max={1000}
                                    />
                                </div>
                                <div>
                                    <BiSolidTrash  className='fs-4'/>

                                </div>
                            </div>
                            <div className='cart-col-4 d-flex align-items-center'>
                                <h5 className='price'>$100</h5>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-12 py-2'>
                        <div className='d-flex justify-content-between align-items-baseline mt-2'>
                            <Link to='/store' className='button'>Continue shopping</Link>
                            <div className='d-flex flex-column align-items-end'>
                                <h4>Subtotal: $100</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to='/checkout' className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart