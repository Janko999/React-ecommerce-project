import React from 'react'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import { useState } from 'react'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { BsTruck } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";






const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://helios-i.mashable.com/imagery/reviews/03iQMbCEXWmZp7RWtWGRrg5/hero-image.fill.size_1248x702.v1623391765.jpg"
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-image d-flex flex-wrap gap-15'>
                <div>
                  <img src='https://helios-i.mashable.com/imagery/reviews/03iQMbCEXWmZp7RWtWGRrg5/hero-image.fill.size_1248x702.v1623391765.jpg' className='img-fluid'></img>
                </div>
                <div>
                  <img src='https://helios-i.mashable.com/imagery/reviews/03iQMbCEXWmZp7RWtWGRrg5/hero-image.fill.size_1248x702.v1623391765.jpg' className='img-fluid'></img>
                </div>
                <div>
                  <img src='https://helios-i.mashable.com/imagery/reviews/03iQMbCEXWmZp7RWtWGRrg5/hero-image.fill.size_1248x702.v1623391765.jpg' className='img-fluid'></img>
                </div>
                <div>
                  <img src='https://helios-i.mashable.com/imagery/reviews/03iQMbCEXWmZp7RWtWGRrg5/hero-image.fill.size_1248x702.v1623391765.jpg' className='img-fluid'></img>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>Kids Headphone for better expirience</h3>
                </div>
                <div className='border-bottom'>
                  <p className='price'>$100.00</p>
                </div>
                <div className='border-bottom d-flex align-items-center gap-10'>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className='mb-0 review-count'> (2 reviews)</p>
                </div>
                <div className='border-bottom py-3'>
                  <a className='review-btn' href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom py-2'>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h5 className='product-heading'>Type:</h5>
                    <p className='product-data'>Technology</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h5 className='product-heading'>Brand:</h5>
                    <p className='product-data'>Apple</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h5 className='product-heading'>Category:</h5>
                    <p className='product-data'>Headphones</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h5 className='product-heading'>Tags:</h5>
                    <p className='product-data'>#headphones, #apple, #smart</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h5 className='product-heading'>Availability:</h5>
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h5 className='product-heading'>Size:</h5>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h5 className='product-heading'>Color:</h5>
                    <Color />
                  </div>
                  <div className='d-flex gap-10 align-items-center flex-row mt-1 mb-3 gap-15'>
                    <h5 className='product-heading'>Quantity:</h5>
                    <div className=' d-flex'>
                      <input
                        type='number'
                        name=''
                        min={1}
                        max={10}
                        className='form-control'
                        style={{ "width": "70px" }}
                        id='' />
                    </div>
                    <div className='d-flex align-items-center gap-15 ms-5'>
                      <button className='button border-0'>Add to cart</button>
                      <button className='button border-0 signup'>Buy now</button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a className=' d-flex align-items-center' href=''>
                        <FaRegHeart className=' me-1' />
                        Add to wishlist</a>
                    </div>
                    <div>
                      <a className='d-flex align-items-center' href=''>
                        <IoIosGitCompare className='me-1' />
                        Add to compare</a>
                    </div>

                  </div>
                  <div className='my-3'>
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <BsTruck className='me-2'/>
                            Shipping and Returns
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            Free shipping and returns available on <strong>all orders.</strong><br></br>
                            We ship all the orders within <stron>3-5 working days</stron> 
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <GiClothes className='me-2'/>
                            Material
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <MdOutlineIntegrationInstructions className='me-2'/>
                            Care Instructions
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam hendrerit justo nec libero ultricies, nec ultricies
                  ipsum suscipit. Vivamus consectetur metus ac velit tristique,
                  non fermentum felis aliquam. Integer sollicitudin nulla at urna
                  scelerisque, eget facilisis magna fringilla. Aenean vel tincidunt
                  dolor. Sed in aliquam justo, sed lacinia urna.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='reviews-wrapper home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3>Reviews</h3>
              <div className='review-inner-wrapper bg-white p-3'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='mb-0'>Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a href='' id='review' className='text-dark text-decoration-underline'>Write a review</a>
                    </div>
                  )}
                </div>
                <div className='review-form py-4'>
                  <h4 className='mb-2'>Write your review</h4>
                  <form action='' className='d-flex flex-column gap-15'>

                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
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
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit review</button>
                    </div>
                  </form>
                </div>
                <div className='reviews mt-3'>
                  <div className='review'>
                    <div className='d-flex align-items-center gap-10'>
                      <h6 className='mb-0'>Jane Kostov</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam hendrerit justo nec libero ultricies, nec ultricies
                      ipsum suscipit. Vivamus consectetur metus ac velit tristique,
                      non fermentum felis aliquam.</p>
                  </div>
                </div>
              </div>
            </div>
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

          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct