import React from 'react';
import './Profile.css'

function Profile (){
    return(
        <div  className='container'>
        <div className="alert">
            <p className='heading'>ASTRA</p>
            <div className="navbar">
                <ul className='list'>
            <li><a href="">Avaliable for Job</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="Profile.jsx">Profile</a></li>
            <li><a href="">Apply for Job</a></li>
            <li><a href="">Mail Box</a></li>
            </ul>
        </div>
        </div>
        <div className="intro">
        <h2 >Upload your resume</h2>
        <div className="resume">
       
       
  <span>Select your resume:</span>
  <input type="file" id="resumeFile" accept="document/*"></input>
  <i class="far fa-edit"></i>
        </div>
        <hr></hr>
        
<h4>Fill your Form</h4>
<div className="inputs">
<input type="email" placeholder="Email-ID"></input>
<input type="Number" placeholder="Contact NO"></input>
<i class="fab fa-linkedin"></i>
<i class="fab fa-github"></i>
<i class="far fa-edit"></i>
</div>
<hr></hr>
<div className='exp-sec'>
<i class="fas fa-cog"></i>
    <h4>Overall Experience</h4>
    <h5>7 Years Experience / 0 years remote</h5>
    <h5>Average English proficiency</h5>
    <i class="far fa-edit"></i>
</div>
<hr></hr>
<div className='time-sec'>
<i class="far fa-calendar-check"></i>
    <h4>Avaiblity</h4>
    <h4>Full Time</h4>
    <i class="far fa-edit"></i>
</div>
        </div>
       
        
        </div>
    )
}
 

export default Profile;