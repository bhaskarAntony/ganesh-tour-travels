import React from 'react'
import './style.css'
import logo from '../images/sgtt.jpg'

function Header() {
  return (
    <header className='bg-white shadow'>
        <nav class="navbar navbar-expand-lg p-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} alt="sri ganesh tours and travels" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#places">places</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#offter">package</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About places</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cars">Cars</a>
        </li>
       
       
      </ul>
      <form class="d-flex">
       
        <a href="https://sriganeshtourandtravels.com" class="btn btn-primary" type="submit" target="_blank">Visit to website</a>
      </form>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header