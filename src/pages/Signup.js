import React from 'react'
import Meta from '../components/Meta'

const Signup = () => {
  return (
    <>
        <Meta title = {"Signup"}/>
        <div className='login-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
          <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Create Account</h3>
                        <form action='' className='d-flex flex-column gap-10'>
                            <div>
                                <input type='text' name='first-name' placeholder="First name" className='form-control' important/>
                            </div>
                            <div>
                                <input type='text' name='last-name' placeholder="Last name" className='form-control' important/>
                            </div>
                            <div>
                                <input type='password' name='password' placeholder='Enter password' className='form-control'/>
                            </div>
                            <div>
                                <input type='password' name='password' placeholder='Repeat password' className='form-control'/>
                            </div>
                            <div className='d-flex justify-content-center align-items-end gap-15 mt-3'>
                                <button className='button border-0' type='submit'>Sign up</button>
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

export default Signup