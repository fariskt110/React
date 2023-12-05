import React from "react";
import '../student/Studenthome.css'
import Navbar from "../../components/navbar/Navbar";

export default function Studenthome(){
    return(
    <>
    <Navbar></Navbar>
        <div className="card-container">
        <div className="card">
            <img src="" alt=""/>
            <h3>card 1</h3>
            <p>Reshma</p>
            <a href="" className="btn">Read More</a>
        </div>
        </div>
        <div class="card-container">
        <div class="card">
            <img src="" alt=""/>
            <h3>card 2</h3>
            <p>Reshma</p>
            <a href="" className="btn">Read More</a>
        </div>
        </div>
        <div class="card-container">
        <div class="card">
            <img src="" alt=""/>
            <h3>card 1</h3>
            <p>Reshma</p>
            <a href="" className="btn">Read More</a>
        </div>
       </div>
    </>
    )
}