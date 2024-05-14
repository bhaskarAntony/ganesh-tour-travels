import React from 'react'
import './style.css'

const data = [
    {
        title:'SEDAN',
        image:'https://www.pngitem.com/pimgs/m/175-1751064_indian-car-png-transparent-png.png',
        desc:'Offering 4+1 with AC',
        price:'4699/- '
    },
    {
        title:'Toyota SUV',
        image:'https://p.kindpng.com/picc/s/175-1751036_dollar-rent-a-car-mini-van-hd-png.png',
        desc:'Offering 7+1 with AC',
        price:'6699/- '
    }
]

function Cars() {
  return (
    <div className='cars p-3 p-md-5 container-fluid overflow-hidden'>
        <h1 className="display-2 italic-heading mb-5 text-center">Available cars for this tour <span className="text-primary">Package</span> </h1>
        <div className="row">
            {
                data.map((item, index)=>(
                    <div className="col-md-6">
                        <div className="car-card shadow mb-5" data-aos="zoom-out-right">
                            <div className="offer">
                                <h1 className="fs-2 fw-bold">&#8377;{item.price}  </h1>
                                <small className="small">Only</small>
                            </div>
                            <img src={item.image} alt="" className='w-100' />
                            <div className="car-info">
                                <h5 className="fs-5">{item.title}</h5>
                                <p className="fs-6">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cars