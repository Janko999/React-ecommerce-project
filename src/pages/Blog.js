import React from 'react'
import Meta from '../components/Meta'
import BlogCards from '../components/BlogCards'
import BreadCrumb from '../components/BreadCrumb'

const Blog = () => {
  return (
    <>
      <Meta title = {"Blog"}/>
      {/* <BreadCrumb title='Blogs'/> */}

      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
            <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Blogs by Categories
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Technology</li>
                    <li>Music</li>
                    <li>Video</li>
                    <li>VR</li>
                    <li>Apple</li>
                    <li>Samsung</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='row'>
                <div className='col-6 mb-3'>
                  <BlogCards />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCards />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCards />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog