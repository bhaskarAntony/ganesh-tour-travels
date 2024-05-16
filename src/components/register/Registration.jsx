import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import Loading from './Loading';
import SuccessPopup from './SuccessPopup';

function Registration() {
    const [isLoading, setIsLoading]  = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: ''
  });

  const [showmodal, setShowModal] = useState(false);
  const [desc, setDesc] = useState(null);
  const [title, setTitle] = useState(null);
  const [done, setDone] = useState(false);


  const handleClose = () => {
      setShowModal(false);
  };

  const openModal = (title, desc, isdone) => {
      setShowModal(true);
      setDesc(desc);
      setTitle(title);
      setDone(isdone)
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const response = await axios.post('https://stormy-flannel-nightgown-ox.cyclic.app/isha/api/register', formData);
      console.log(response.data); // Handle successful response
      setIsLoading(false);
      openModal('Registration Successful', 'Thank you for registering! Our team will get back to you shortly. Enjoy the tour.', true);
    } catch (error) {
      setIsLoading(false);
      console.error('Error:', error); // Handle error
      openModal('Registration Error', 'Registration failed. Please try again. Thank you.', false);
    }
  };
  if(isLoading){
    return <Loading/>
  }
  return (
    <div className='text-start bg-white container p-3 text-dark py-4 rounded-3 shadow' data-aos="fade-up">
      <h2 className="fs-3">Check Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group mt-2">
              <label htmlFor="username" className='form-label'>Username</label>
              <input type="text" className="form-control p-3" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Enter your name' />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group mt-2">
              <label htmlFor="phoneNumber" className='form-label'>Phone number</label>
              <input type="text" className="form-control p-3" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter your phone number' />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group mt-2">
              <label htmlFor="location" className='form-label'>Your Location</label>
              <input type="text" className="form-control p-3" id="location" name="location" value={formData.location} onChange={handleChange} placeholder='Enter your location' />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group mt-2">
              <button type="submit" className="btn btn-primary p-3 mt-4 w-100">Check Now</button>
            </div>
          </div>
        </div>
      </form>
      <SuccessPopup show={showmodal} close={handleClose} title={title} desc={desc} isDone={done}/>
    </div>
  );
}

export default Registration;
