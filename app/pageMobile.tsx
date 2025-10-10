import React from 'react'
import HomeMobile from './homeMobile'
import AboutmeMobile from './aboutmeMobile'
import NavbarMobile from './components/NavbarMobile'
import ContactMobile from './contactMobile'

const PageMobile = () => {
  return (
    <div className='text-white w-screen mx-0 px-5'>
      <NavbarMobile />
      <HomeMobile />
      <AboutmeMobile />
      <ContactMobile />
    </div>
  )
}

export default PageMobile