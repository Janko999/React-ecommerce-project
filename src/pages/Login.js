import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <Meta title = {"Login"}/>
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Login</h3>
                        <form action='' className='d-flex flex-column gap-10'>
                            <div>
                                <input type='email' name='email' placeholder="Email" className='form-control' important/>
                            </div>
                            <div>
                                <input type='password' name='password' placeholder='Password' className='form-control'/>
                            </div>
                            <div className='text-end'>
                                <Link to="/forgot-password">Forgot your password?</Link>
                            </div>
                            <div className='d-flex justify-content-center align-items-end gap-15 mt-3'>
                                <button className='button border-0'>Login</button>
                                <Link to="/signup" className='button signup'>Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Login