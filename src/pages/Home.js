import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCards from '../components/BlogCards'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'
import Meta from '../components/Meta'

const Home = (props) => {
  return (
    <>
      <Meta title={"Home"} />
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img 
                  src='images/main-banner-1.jpg' 
                  className='img-fluid rounded-3'
                  alt=''
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPECHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/month</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between alig-items-center'>
              <div className='small-banner position-relative'>
                <img 
                  src='images/catbanner-01.jpg' 
                  className='img-fluid rounded-3'
                  alt='small banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1960.00 <br/> or $64.62/month</p>
                </div>
              </div> 
              <div className='small-banner position-relative'>
                <img 
                  src='images/catbanner-03.jpg' 
                  className='img-fluid rounded-3'
                  alt='small banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $599.00 <br/> or $49.91/month</p>
                </div>
              </div>  
              <div className='small-banner position-relative'>
                <img 
                  src='images/catbanner-02.jpg' 
                  className='img-fluid rounded-3'
                  alt='small banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest <br/> band styles and colors</p>
                </div>
              </div>  
              <div className='small-banner position-relative'>
                <img 
                  src='images/catbanner-04.jpg' 
                  className='img-fluid rounded-3'
                  alt='small banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & <br/> ultra-low distortion</p>
                </div>
              </div>   
              </div>  
            </div>  
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services'/>
                  <div>
                    <h6 className='mb-1'>Free Shipping</h6>
                     <p className='mb-0'>All orders over $500</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-02.png' alt='services'/>
                  <div>
                    <h6 className='mb-1'>Daily Surprise Offers</h6>
                     <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-03.png' alt='services'/>
                  <div>
                    <h6 className='mb-1'>Support 24/7</h6>
                     <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-04.png' alt='services'/>
                  <div>
                    <h6 className='mb-1'>Affordable prices</h6>
                     <p className='mb-0'>Get factory direct prices</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-05.png' alt='services'/>
                  <div>
                    <h6 className='mb-1'>Secure Payments</h6>
                     <p className='mb-0'>100% Safe and Protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex align-items-center flex-wrap justify-content-between'>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Music and Gaming</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart Tv</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/tv.jpg' alt='camera'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/headphone.jpg' alt='camera'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Music and Gaming</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart Tv</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/tv.jpg' alt='camera'/>
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/headphone.jpg' alt='camera'/>
                  </div>
                  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='famous-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/fuck.jpg' alt='' className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or 16.62/mo.<br/> for 24 mon.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/fuck.jpg' alt='' className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or 16.62/mo.<br/> for 24 mon.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/fuck.jpg' alt='' className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or 16.62/mo.<br/> for 24 mon.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/fuck.jpg' alt='' className='img-fluid'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or 16.62/mo.<br/> for 24 mon.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
                <h3 className='section-heading'>
                  Special Offer Products
                </h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProducts/>
            <SpecialProducts/>
          </div>
        </div>
      </section>
      <section className='popular-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Our Popular Products
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='marquee-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand'/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Latest Blog News
              </h3>
            </div>

          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCards />
            </div>
            <div className='col-3'>
              <BlogCards />
            </div>
            <div className='col-3'>
              <BlogCards />
            </div>
            <div className='col-3'>
              <BlogCards />
            </div>
            
          </div>
        </div>
      </section>

    </>
  )
}

export default Home