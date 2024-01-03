import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Forgotpass = () => {
  return (
    <>
        <Meta title = {"Forgot Password"}/>
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset your password</h3>
                        <h6 className='text-center'>We will send an email to your address to reset password</h6>
                        <form action='' className='d-flex flex-column gap-10'>
                            <div>
                                <input type='email' name='email' placeholder="Email" className='form-control' important/>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center gap-15 mt-3'>
                                <button className='button border-0' type="submit">Submit</button>
                                <Link to="/login" className="cancel">Cancel</Link>
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

export default Forgotpass