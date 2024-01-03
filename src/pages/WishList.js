import React from 'react'
import Meta from '../components/Meta'

const WishList = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='cross position-absolute img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src="images/watch.jpg" className='img-fluid w-100' />
                                </div>
                                <div className='bg-white px-2 py-3'>
                                    <h5 className='title'>Iphone 15 Pro Max 256GB</h5>
                                    <h6 className='price'>$299</h6>

                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='cross position-absolute img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src="images/watch.jpg" className='img-fluid w-100' />
                                </div>
                                <div className='bg-white px-2 py-3'>
                                    <h5 className='title'>Iphone 15 Pro Max 256GB</h5>
                                    <h6 className='price'>$299</h6>

                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='cross position-absolute img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src="images/watch.jpg" className='img-fluid w-100' />
                                </div>
                                <div className='bg-white px-2 py-3'>
                                    <h5 className='title'>Iphone 15 Pro Max 256GB</h5>
                                    <h6 className='price'>$299</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList