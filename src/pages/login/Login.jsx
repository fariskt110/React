import React from "react";
import '../login/Login.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


export default function Login() {
    // const [inputs,setInputs] =useState({
    //     username:"",
    //     password:"",
    //     email:"",
        
        
    // });
    // const handleInputChange = (e) =>{
    //     setInputs({
    //         ...inputs,
    //         [e.target.name]: e.target.value,
    //     });
    // }
    return(
        <>
        <Navbar></Navbar>
        <div className="login-container">
        <h2>Login</h2>
        <form class="login-form" action="#" method="post">
            <input type="text" name="username" placeholder="Username" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <button type="submit">Login</button>
        </form>
        </div>
        
        </>
    )
}