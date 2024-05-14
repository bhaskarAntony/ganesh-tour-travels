import React from 'react'
import './style.css'
import ishavideos from '../images/isha.mp4'

function Places() {
  return (
    <section className='places container p-3 p-md-5'>
        <h1 className="display-2 fw-bold mb-5 text-center italic-heading">Offering Places in this <span className="text-primary">Package</span></h1>
        <div className="row">
            <div className="col-md-6 mt-3">
                <div className="places-left">
                    <video src={ishavideos} loop autoPlay muted></video>
                </div>
            </div>
            <div className="col-6 col-md-3 mt-3">
                <img src="https://static.sadhguru.org/d/46272/1687922120-mask-group-2.jpg" alt="" className="w-100" />
            </div>
            <div className="col-6 col-md-3 mt-3">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-0c221aed06feb2a7bc9947a6dcb7ec1f-lq" alt="" className="w-100" />
            </div>

          
            <div className="col-6 col-md-3 mt-3">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN7AVVaTraDMYck42ASUPmYVPEvxjNShP97A7PI=w540-h312-n-k-no" alt="" className="w-100" />
            </div>
            <div className="col-6 col-md-3 mt-3">
                <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRLvwWfHftGKhKZaKv8VuZ8v51ll0dWzlXrjMNk2rEiHurkkSdyDzbBQGBGSIJ9FxdDgA2ZTP5rXa3nI5TIUoeak8VdO0l9wufkMFvv0A" alt="" className="w-100" />
            </div>
            <div className="col-md-6 mt-3">
                <div className="places-left">
                    {/* <video src={ishavideos} loop autoPlay muted></video> */}
                    <img src="https://lh5.googleusercontent.com/p/AF1QipNYxc8WwDBW4hpkT_XXd-PiNbC5SluNkIrL0KxX=w540-h312-n-k-no" alt="" className="w-100" />
                </div>
            </div>


            <div className="col-md-6 mt-3">
                <div className="places-left">
                    {/* <video src={ishavideos} loop autoPlay muted></video> */}
                    <img src="https://www.srighatisubramanya.org/wp-content/uploads/2021/12/3-795x467.jpg" alt="" className="w-100" />
                </div>
            </div>
            <div className="col-6 col-md-3 mt-3">
                <img src="https://live.staticflickr.com/6106/6330126221_e470a4671a_b.jpg" alt="" className="w-100" />
            </div>
            <div className="col-6 col-md-3 mt-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggYqRzS3kej3h_RIcvaOd6oNJbkyguXoNeVV67r_qXxUTbYqx89F8tTIkgypb9sIxvOM&usqp=CAU" alt="" className="w-100" />
            </div>
           
        </div>
    </section>
  )
}

export default Places