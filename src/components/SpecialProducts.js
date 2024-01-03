import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
const SpecialProducts = () => {
  return (
    <div className='col-6'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='images/watch.jpg' alt='watch' className='img-fluid'/>
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Rolex</h5>
                    <h6 className='title'>Rolex Submariner m124060-0001</h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price'>
                        <span className='red-price'>$299.99</span> &nbsp; <strike>$349.99</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5</b> days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-2 bg-danger'>1</span>
                        </div>
                        
                    </div>
                    <div className='product-count my-4'>
                          <p className='mb-1'>Products left: 5</p>
                          <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                    </div>
                    <Link className='button'>Add to cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts