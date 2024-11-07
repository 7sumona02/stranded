import React from 'react'
import Hero from './components/Hero'
import ShowCase from './components/ShowCase'
import Banner from './components/Banner'
import About from './components/About'
import { Features } from './components/Features'
import Steps from './components/Steps'
import Benefits from './components/Benefits'
import { Pricing } from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const Page = () => {
  return (
    <div>
      <Hero />
      <ShowCase />
      <Banner />
      <About />
      <Features />
      <Steps />
      <Benefits />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Page
