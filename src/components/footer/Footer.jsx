import React from 'react';
import '../footer/Footer.css'


export default function Footer(){
    return(
      <section>
      <footer classname="top">
        
        <div classname="links">
          <div classname="links-column">
            <h2>Get Started</h2>
            <a>Home</a>
            <a>Documentation</a>
            <a>Usage</a>
            <a>Globals</a>
            <a>Elements</a>
          </div>
          <div classname="links-column">
            <h2>Resources</h2>
            <a>API</a>
            <a>Visibility</a>
            <a>Accessibility</a>
            <a>Community</a>
            <a>Marketplace</a>
          </div>
          <div classname="links-column socials-column">
            <h2>Social Media</h2>
            <p>
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <div classname="socials">
              <a classname="fa-brands fa-facebook"></a>
              <a classname="fa-brands fa-instagram"></a>
              <a classname="fa-brands fa-linkedin"></a>
            </div>
          </div>
        </div>
      </footer>
      <footer classname="bottom">
        <p classname="copyright">© 2023 All rights reserved</p>
        <div classname="legal">
          <a> License </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
      </footer>
    </section>













    //     <footer>
    //   <div className="container-1">
    //     <div className="row">
          
    //         <div className="col-mid-12 text-white  ">
    //         <center>
    //           <i class="fa-brands fa-facebook-f"></i>
    //           <i class="fa-brands fa-square-instagram"></i>
    //           <i class="fa-brands fa-youtube"></i>
    //           <p >Copyrights </p>
    //           </center>
    //         </div>
         
    //     </div>

    //   </div>
    // </footer> 
    )
}