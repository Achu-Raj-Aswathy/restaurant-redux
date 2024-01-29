import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
        <div className='footer d-flex align-item-center justify-content-evenly mt-5'>
          <div className='website' style={{ width: "400px" }}>
            <h5><i class="fa-solid fa-utensils me-3"></i>Food Circle</h5>
            <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque porro, repudiandae voluptatem tempore rerum, ea cum minima doloribus at eligendi temporibus? Dolore recusandae quisquam placeat optio ducimus, odit molestias libero?</p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h5>Links</h5>
            <Link to='/' style={{ textDecoration: "none", color: "black" }}>Home</Link>
          </div>
          <div className='guides d-flex flex-column ms-5'>
            <h5>Guides</h5>
            <Link to='https://react.dev/' target='_blank' style={{ textDecoration: "none", color: "black" }}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ textDecoration: "none", color: "black" }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Bootswatch</Link>
          </div>
          <div className='contactus ms-5'>
            <h5>Contact Us</h5>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter your email' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <Link><i class="fa-brands fa-instagram fa-2x text-dark"></i></Link>
              <Link><i class="fa-brands fa-twitter fa-2x text-dark"></i></Link>
              <Link><i class="fa-brands fa-facebook fa-2x text-dark"></i></Link>
              <Link><i class="fa-brands fa-linkedin fa-2x text-dark"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-5 text-center'>Copyright &copy; 2024 Food Circle. Built with React and Redux</p>
    </>
  )
}

export default Footer