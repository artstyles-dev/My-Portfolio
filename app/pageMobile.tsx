import React from 'react'
import HomeMobile from './Mobile/homeMobile'
import AboutmeMobile from './Mobile/aboutmeMobile'
import NavbarMobile from './components/NavbarMobile'
import ContactMobile from './Mobile/contactMobile'
import PortfolioMobile from './Mobile/portfolioMobile'

const PageMobile = () => {
  return (
    <div className='text-white w-screen mx-0 px-5'>
      <NavbarMobile />
      <HomeMobile />
      <AboutmeMobile />
      <PortfolioMobile />
      <ContactMobile />
    </div>
  )
}

export default PageMobile