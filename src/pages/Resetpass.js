import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Resetpass = () => {
  return (
    <>
        <Meta title = {"Reset Password"}/>
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset your password</h3>
                        <form action='' className='d-flex flex-column gap-10'>
                        <div>
                                <input type='password' name='password' placeholder='Enter new password' className='form-control'/>
                            </div>
                            <div>
                                <input type='password' name='password' placeholder='Confirm new password' className='form-control'/>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center gap-15 mt-3'>
                                <button className='button border-0' type="submit">Reset</button>
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

export default Resetpass