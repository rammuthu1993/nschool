import React from 'react'

export default function Navbar() {
  return (
    <div class='container-fluid d-flex justify-content-between' style={{backgroundColor:'pink'}}>
        <span>
      <img class='img-fluid' src={require("./img/logo-1.png")} alt="" />
      </span>
<div class='col-10 d-flex justify-content-evenly align-items-center'>
<div>Courses</div> 
<div>Corporate Training</div>
 <div>Services</div>
<div>Live Projects</div>
<div>Live Projects</div>
<div>Testimonials</div>
<div>Hiring Partners</div> 
<div>Contact us</div>
</div>      
</div>
  )
}
