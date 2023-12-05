import React from "react";
import '../navbar/Navbar.css'


export default function Navbar(){
    return(

      <nav>
      <a href="/home" className="item">Home</a>
      <a className="item">About</a>
      <div className="item">
        Registration
        <div className="dropdown">
          <div>
            <a href="/Teacher">Teacher</a>
            <a href="/student">Student</a>
            
          </div>
        </div>
      </div>
      <a className="item" href="/Login">Login</a>
      <div className="underline"></div>
     </nav>
      
        // <div class="navbar">
        //   <a href="#"><i class="fa-sharp fa-solid fa-school fa-beat-fade"></i></a>
        //  <a href="/home">Home</a>
        // <div class="dropdown">
        //   <a href="" className="color" >Register</a>
        //   <div className="dropdown-content">
        //     <a href="/Teacher">Teacher</a>
        //     <a href="/student">Student</a>
        //   </div>
        // </div>
        // <a href="/Login">Login</a>
        // </div>
    )
}