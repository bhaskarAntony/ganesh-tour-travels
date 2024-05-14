import React from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Places from '../../components/places/Places'
import Know from '../../components/know/Know'
import Cars from '../../components/cars/Cars'
import COntact from '../../components/contact/COntact'

function Home() {
  return (
    <div>
        <Hero/>
        <Places/>
        <Know/>
        <Cars/>
        <COntact/>
    </div>
  )
}

export default Home