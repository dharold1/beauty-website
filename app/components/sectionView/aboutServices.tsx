import React from 'react'
import MakeupComponent from '../pageComponents/makeUpComponent'
import AboutServiceComponent from '../pageComponents/aboutServiceComponent'

const AboutServices = () => {
  return (
    <div className='overflow-hidden'>
      <AboutServiceComponent/>
      <MakeupComponent/>
    </div>
  )
}

export default AboutServices
