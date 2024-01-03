import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link to='product/:id' className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'><img src='images/wish.svg' alt='wishlist icon'/></button>
            </div>
            <div className='product-image'>
                <img src='images/apple-watch.jpg' alt='product image' className='img-fluid'/>
                <img src='images/apple-watch1.jpg' alt='product image' className='img-fluid'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Tissot</h6>
                <h5 className='product-title'>
                    Hi-Tech headphones 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                />
               <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Our most powerful chip in Apple Watch ever.
                     A magical new way to use your Apple Watch without touching the screen. 
                     A display that’s twice as bright. And now you can choose a watch case and 
                     band combination that’s carbon neutral.
                </p>
                <p className='price'>$199.99</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src='images/prodcompare.svg' alt='compare product' />
                    </button >
                    <button className='border-0 bg-transparent'>
                        <img src='images/view.svg' alt='view product' />
                    </button >
                    <button className='border-0 bg-transparent'>
                        <img src='images/add-cart.svg' alt='add cart' />
                    </button >
                </div>
            </div>
        </Link>
        </div>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent'><img src='images/wish.svg' alt='wishlist icon'/></button>
                </div>
                <div className='product-image'>
                    <img src='images/apple-watch.jpg' alt='product image' className='img-fluid'/>
                    <img src='images/apple-watch1.jpg' alt='product image' className='img-fluid'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Tissot</h6>
                    <h5 className='product-title'>
                        Hi-Tech headphones 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                     <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Our most powerful chip in Apple Watch ever.
                     A magical new way to use your Apple Watch without touching the screen. 
                     A display that’s twice as bright. And now you can choose a watch case and 
                     band combination that’s carbon neutral.
                     </p>
                    <p className='price'>$199.99</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='compare product' />
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='view product' />
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='add cart' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link><img src='images/wish.svg' alt='wishlist icon'/></Link>
                </div>
                <div className='product-image'>
                    <img src='images/apple-watch.jpg' alt='product image' className='img-fluid'/>
                    <img src='images/apple-watch1.jpg' alt='product image' className='img-fluid'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Tissot</h6>
                    <h5 className='product-title'>
                        Hi-Tech headphones 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                     <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Our most powerful chip in Apple Watch ever.
                     A magical new way to use your Apple Watch without touching the screen. 
                     A display that’s twice as bright. And now you can choose a watch case and 
                     band combination that’s carbon neutral.
                     </p>
                    <p className='price'>$199.99</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='compare product' />
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='view product' />
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='add cart' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link><img src='images/wish.svg' alt='wishlist icon'/></Link>
                </div>
                <div className='product-image'>
                    <img src='images/apple-watch.jpg' alt='product image' className='img-fluid'/>
                    <img src='images/apple-watch1.jpg' alt='product image' className='img-fluid'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Tissot</h6>
                    <h5 className='product-title'>
                        Hi-Tech headphones 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                     <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Our most powerful chip in Apple Watch ever.
                     A magical new way to use your Apple Watch without touching the screen. 
                     A display that’s twice as bright. And now you can choose a watch case and 
                     band combination that’s carbon neutral.
                     </p>
                    <p className='price'>$199.99</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='compare product' />
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='view product' />
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='add cart' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>

  )
}

export default ProductCard