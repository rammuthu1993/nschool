import React from 'react'


export default function Contactus() {
  return (
    
    <>
    <div class='container-fluid pb-5 text-white' style={{backgroundColor:'rgb(6 182 212)'}}>

        <div class='row'>
            <div class='col-md-6 ps-3'>
                <br />
           <h2> Contact us</h2>
           <br /> <br />
            <p>We’d love to hear from you! Send us a question or comment below and we’ll get in touch with you shortly!</p> 
            </div>

            <div class='col-md-6'>
                <img class='img-fluid' src={require("./img/Group-1502.png")} alt="" />
            </div>
        </div>

    </div>
     

     <div class='container-fluid'>
        <div class='row'>
    <div id='contact' class='float-md-start col-md-4 text-white py-5 ps-3 rounded-2' style={{backgroundColor:'purple'}}>

       <div class='d-flex align-items-center gap-2'>
        <div> <i id='mob' class="fa-solid fa-phone"></i> </div>
        <div> <p>Phone <br />
            +91 90434 94941, +91 63741 48844, <br /> 0422 – 3599640</p></div>
        </div>
    
            <br />
        <div class='d-flex align-items-center gap-2'>
        <div> <i id='mob' class="fa-solid fa-envelope"></i></div>
        <div><p> Email <br />
             contact@n-school.com </p>
        </div>
          </div>
                         <br />
        <div class='d-flex gap-2'>
        <div> <i id='mob' class="fa-solid fa-location-pin"></i> </div>
        <div> <p>Location <br />
             Regional Head Office - Coimbatore <br />
        <br />
            No – 287/3, Standard Towers, <br />
            Near Fun Republic Mall, <br />
            Avinashi main road, Peelamedu, <br />
            Coimbatore – 641 004. <br />
            <br />
            Branch Office - Gobichettipalayam <br />
            <br />
            No – 10/1 1st Floor, Sai Arcades, <br />
            Pariyur Road,Near Bus Stand, <br />
            Gobichettipalayam – 638 476.</p></div> 
            
        </div>

         
</div>
        
<div id='form' class='col-md-7 bg-white float-md-start d-flex justify-content-center ps-5 rounded-2 shadow-lg'>
    <div class='col-md-8 bg-white pb-5'>
    <br />
            <h1>Get in Touch with us!</h1>
            <br />
        <form action="">
            
        <div>
            <input class='col-md-12 p-2 border-1' type="text" required placeholder='Name'/>
        </div>
                                     <br />
        <div>
            <input class='col-md-12 p-2 border-1' type="text" required placeholder='Phone Number'/>
        </div>
                                       <br />
        <div>
            <input class='col-md-12 p-2 border-1' type="text" required placeholder='Email'/>
        </div>
                                       <br />
        <div>
            <input class='col-md-12 p-2 border-1' list='courses' name='course' required placeholder='Courses'/>
            <datalist id='courses'>

                <option value="Courses"></option>
                <option value="IOS"></option>
                <option value="Android"></option>
                <option value="Angular Js"></option>
                <option value="PHP/Mysql"></option>
                <option value="Python"></option>
                <option value="C"></option>
                <option value="C++"></option>
                <option value="Fullstack"></option>
                <option value="Mongo DB"></option>
                <option value="React Js"></option>
                <option value="Digital Marketing"></option>
                <option value="2D Animation"></option>
                <option value="Node Js"></option>
                <option value="Software Design"></option>

            </datalist>
        </div>
                                    <br />
        <div>
            <textarea class='container' placeholder='Message' rows={5}/>
        </div>
                               <br />
         <div><input type="submit" class='container py-2 text-white border-0' style={{backgroundColor:'purple'}}/></div>

        </form>
    </div>
</div>
</div>


</div>
<div class='container-fluid' id='map'>
<div class='container mt-5 pb-5'>
    <h1>Our Location</h1>
    <p>Kitkat Software Technologies is located in the heart of the city. So, You could reach us <br /> anytime and we make ourselves accessible always to serve you technically!

</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.323119654818!2d76.97610157409065!3d11.014365654761743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1716463138090!5m2!1sen!2sin" class='col-md-12' style={{height:'500px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
</>
    
    
  )
}
