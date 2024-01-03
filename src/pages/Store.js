import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'

const Store = () => {
  const [grid,setGrid] = useState(4);
  return (
    <>
      <Meta title = {"Store"}/>
      <BreadCrumb title='Our Store'/>
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Shop by Categories
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Laptop</li>
                    <li>VR</li>
                    <li>Smart Phone</li>
                    <li>Keyboard</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Filter By
                </h3>
                <div>
                  <h5 className='sub-title'>Availabilty</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                        In stock (25)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                      Out of stock (0)
                      </label>
                    </div>
                  </div>
                </div>
                <h5 className='sub-title'>Price</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="From"/>
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input 
                          type="email" 
                          className="form-control" 
                          id="floatingInput" 
                          placeholder="To"/>
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h5 className='sub-title'>Color</h5>
                <div>
                  <div className='d-flex flex-wrap'>
                    <Color/>
                  </div>
                </div>
                <h5 className='sub-title'>Size</h5>
                <div className='filter-card'>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                        SM (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                        S (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                        M (15)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                        L (30)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                        XL (25)
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className="form-check-label" htmlFor="">
                        XXl (2)
                      </label>
                    </div>
                  </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                  <div>
                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>Headphones</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>Laptop</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>Mouse</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>USB</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>Keyboard</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>Joystick</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>TV</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>Phone</span>
                      <span className='badge bg-warning rounded-3 py-2 px-3'>HDMI Cable</span>
                    </div>
                  </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Products you may like
                </h3>
                <div>
                  <div className='random-products d-flex mb-3'>
                    <div className='w-50'>
                      <img src='images/watch.jpg' className='img-fluid' alt='' />
                    </div>
                    <div className='w-50'>
                      <h5 className=''>
                        Beats by DRE headphones multi colored
                      </h5>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='price'>$199.99</p>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src='images/watch.jpg' className='img-fluid' alt='' />
                    </div>
                    <div className='w-50'>
                      <h5 className=''>
                        Beats by DRE headphones multi colored
                      </h5>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='price'>$199.99</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0' style={{"width":"100px"}}>Sort by:</p>
                    <select name='' className='form-control form-select' id=''>
                      <option value="featured">Featured</option>
                      <option value="best-selling" selected="selceted">Best Selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date. new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10 grid'>
                    <p className='total-products mb-0'>15324 Products</p>
                    <div className='d-flex align-items-center gap-10 '>
                      <img onClick={() => setGrid(3)} src='images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                      <img onClick={() => setGrid(4)} src='images/gr3.svg' className='d-block img-fluid' alt='grid'/>  
                      <img onClick={() => setGrid(6)} src='images/gr2.svg' className='d-block img-fluid' alt='grid'/>  
                      <img onClick={() => setGrid(12)} src='images/gr.svg' className='d-block img-fluid' alt='grid'/>    
                    </div> 
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  
                  <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store