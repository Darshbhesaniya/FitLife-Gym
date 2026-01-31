import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Wcu from './Components/Wcu'
import Mot from './Components/Mot'
import PricingPlan from './Components/PricingPlan'
import Community from './Components/Community'
import Contactpage from './Components/Contactpage'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='h-sreen text-white'>
      <Header />
      <Banner />
      <Wcu />
      <Mot />
      <PricingPlan />
      <Community />
      <Contactpage />
      <Footer />
    </div>
  )
}

export default App