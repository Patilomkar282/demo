import React from 'react';
import './Home.css';
import  './Profile.jsx';
function Home(){
    return(
    <div className="leftmargin">
        <h1>ASTRA</h1>
        <div className="header">
        <h2>Welcome John</h2>
        <h2>How to get the jobs with top U.S. Companies</h2>
        </div>
        
        <div className="Navbar">
            <li><a href="">Avaliable for Job</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="Profile">Profile</a></li>
            <li><a href="">Apply for Job</a></li>
            <li><a href="">Mail Box</a></li>
        </div>
<div className="main">
        <div className="Top">
        <li><a href="">1.Take Tests</a></li><br></br>
        </div>
        <div className="Top">
            <li><a href="">2.Pass Live Coding Challenge</a></li><br></br>
</div>
            <div className="Top">
            <li><a href="">3.Finalize your resume</a></li><br></br>
</div>
            <div className="Top">
            <li><a href="">4.Receive job offers</a></li><br></br>
        </div>
        </div>
        <img src="https://cdn1.vectorstock.com/i/1000x1000/49/60/business-people-office-team-cartoon-characters-vector-29934960.jpg"  className="pic"></img>
        
<div className="body">
    <h2>Why Join?</h2>
    
       <h4> 1.Work full-time at the top Silicon-valley or other U.S. Companies.</h4>
        <br></br>
        <h4>2.Earn better salary compared to local Companies in our city.</h4>
        <br></br>
        <h4> 3.Grow as a developer by working with the smartest 
        <br></br>engineers from all over the world</h4>
        <br></br>
        <h4>4.Get paid monthly directly to our bank account.Forgot about the 
            <br></br>issues with Paypal or Payoneer.</h4>
    
</div>
    </div>

    )
}

export default Home;