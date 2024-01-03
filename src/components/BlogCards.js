import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = () => {
  return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt=''/>
            </div>
            <div className='blog-content'>
                <p className='date'>10 October, 2023</p>
                <h5 className='title'>New York’s Airbnb Ban Is Descending Into Pure Chaos</h5>
                <p className='desc'>People are listing short-term rentals on social media and lesser-known platforms, bolstering a rental black market in New York City.</p>
                <Link to="blog/:id" className='button'>Read More</Link>
            </div>
        </div>
  )
}

export default BlogCards 