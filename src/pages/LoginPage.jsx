import React from 'react'
import LoginLeft from '../components/login/LoginLeft'
import LoginRight from '../components/login/LoginRight'

function LoginPage() {
  return (
    <div className='flex w-screen h-screen'>
      <div className='lg:w-[45%] w-full h-full'>
        <LoginLeft />
      </div>
      <div className='w-[55%] h-full hidden lg:block'>
        <LoginRight />
      </div>
    </div>
  )
}

export default LoginPage