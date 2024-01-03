import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { IoReturnDownBackOutline } from "react-icons/io5";


const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"} />
        <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
                <div className='single-blog-card'>
               

                    <Link to='/blogs'>  <IoReturnDownBackOutline className='fs-5' /> Back to Blogs</Link>
                    <h3 className='title'>
                        Beautiful sunday morning walk
                    </h3>
                    <img src='/images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam hendrerit justo nec libero ultricies, nec ultricies 
                        ipsum suscipit. Vivamus consectetur metus ac velit tristique, 
                        non fermentum felis aliquam. Integer sollicitudin nulla at urna
                         scelerisque, eget facilisis magna fringilla. Aenean vel tincidunt
                          dolor. Sed in aliquam justo, sed lacinia urna. Duis ac erat sit amet
                           lacus lobortis scelerisque. Phasellus quis sapien sit amet velit 
                           aliquet accumsan. Nullam fringilla neque eu felis pharetra congue. 
                           Ut nec ante nec nulla consequat aliquet. 
                        Morbi vitae massa in nisi tincidunt gravida. Proin quis neque odio.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog