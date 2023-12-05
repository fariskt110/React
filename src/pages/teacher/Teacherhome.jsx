import React from "react";
import Navbar from "../../components/navbar/Navbar";
import '../teacher/Teacherhome.css'

export default function Teacherhome(){
    return(
        <>
        <Navbar></Navbar>
            <div class="card-container">
            <div class="card">
                <img src="" alt=""/>
                <h3>card 1</h3>
                <p>Reshma</p>
                <a href="" class="btn">Read More</a>
            </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src="" alt=""/>
                    <h3>card 2</h3>
                    <p>Reshma</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src="" alt=""/>
                    <h3>card 3</h3>
            <p>Reshma</p>
            <a href="" className="btn">Read More</a>
            </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src="" alt=""/>
                    <h3>card 1</h3>
                    <p>Reshma</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>
    </>
    )
}