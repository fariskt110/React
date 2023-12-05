import React, { useState } from "react";
import '../teacher/Teacher.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Teacher(){
    const navigate=useNavigate();
    const [inputs,setInputs] =useState({})
    //     username:"",
    //     password:"",
    //     email:"",
    //     phone:"",
    //     subject:"",
    //     department:"",
    //     course:"",
    // });
    console.log(inputs)
    const handleInputChange = (e) =>{
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
        // setInputs({
        //     ...inputs,
        //     [e.target.name]: e.target.value,
        // });
    }
    const dataadd=(e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/TeacherRegistrationAPIView",inputs).then((res)=>{
            
          console.log(res);

          navigate("/login")
        }).catch((err)=>{
          console.log(err);
        })
        console.log(inputs);
      }
    return(
      
    <>
    <Navbar></Navbar>
    <div className="form-container">
    <h2>Registration Form</h2>
    <form className="registration-form" >
        <input type="text" className="form-input" name="name" placeholder="Username" onChange={handleInputChange} required/>
        <input type="password" className="form-input" name="password" placeholder="Password" onChange={handleInputChange} required/>
        <input type="email" className="form-input" name="email" placeholder="Email" onChange={handleInputChange} required/>
        <input type="tel" className="form-input" name="phone" placeholder="Phone Number" onChange={handleInputChange} required/>
        <select className="form-select" name="course" onChange={handleInputChange} required>
            <option value="" >Select a Course</option>
            <option value="course1">HTML</option>
            <option value="course2">Django</option>
            <option value="course3">Python</option>
        </select>
        <select className="form-select" name="department" onChange={handleInputChange} required>
            <option value="">Select a Department</option>
            <option value="dept1">FrontEnd</option>
            <option value="dept2">BackEnd</option>
            <option value="dept3">Data Scientist</option>
        </select>
        <input type="text" className="form-input" name="subject" placeholder="Subject" onChange={handleInputChange} required/>
        <input type="button" value="Register" className="form-button" onClick={dataadd}></input>
    </form>
    </div>

    </>
    )
}
