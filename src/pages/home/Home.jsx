import React from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Places from '../../components/places/Places'
import Know from '../../components/know/Know'
import Cars from '../../components/cars/Cars'
import COntact from '../../components/contact/COntact'
import poster1 from '../../components/images/poster1.jpg'
import poster2 from '../../components/images/poster2.jpg'

function Home() {
  return (
    <div>
        <Hero/>
      <div className="container p-3 p-md-5" id="offer">
      <div className="row">
            <div className="col-md-6">
                <img src={poster1} alt="" className="w-100 rounded-4 mb-3 shadow" />
            </div>
            <div className="col-md-6">
                <img src={poster2} alt="" className="w-100 rounded-4 mb-3 shadow" />
            </div>
        </div>
      </div>
        <Places/>
        <Know/>
        <Cars/>
        <COntact/>
    </div>
  )
}

export default Home