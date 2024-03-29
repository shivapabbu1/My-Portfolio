import React from 'react'

import './Home.css';
import  image1 from "../Assets/image1.jpg"
import  image2 from "../Assets/css.png"
import  image3 from "../Assets/js.png"
import  image4 from "../Assets/react.jpg"
import  image5 from "../Assets/node.png"
import  image6 from "../Assets/mongodb.jpg"

import photo from "../Assets/DSC_0024.JPG"
import resume from "../Assets/ShivaprasadPabbuResume MERN.pdf"
import ProjectCard  from '../Projectcard/project';
import Skill from "../Skills/skill"
import chat from "../Assets/web1.jpg"
import ecom from "../Assets/web2.jpg"
import weather from "../Assets/web3.jpg"
import profile from "../Assets/web4.jpg"
import todo from "../Assets/web5.jpg"


import image11 from "../Assets/images 11.jpg"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
    <div class="container-fluid">
      <section >
      <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
  <a class="navbar-brand" href="#">Shivaprasad Pabbu</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
  <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#aboutid">ABOUT ME <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projectid">PORTFOLIO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skillid">SKILLS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contactid">CONTACT ME</a>
      </li>
     
    </ul>
  </div>
</nav>

      </section>


       <section class=" Head d-flex   row text-white ">
        
      <div class=" col-lg-8 col-md-6 col-sm-12 col-6">    
            <div class="ml-5">
               <h1>Hello, <br/>
                  I`m Shivaprasad</h1>
                  <span style={{fontSize:"1.9rem"}}>-Aspirant   </span>
                 <div class="typewrite"> <Typewriter  options={{
                              strings: ['MERN Stack Developer', 'Web Developer','Front-end Developer','Back-end Developer'],
                                   autoStart: true,
                            loop: true,
                       }} 
                       /></div>
                       <p>A Full-Stack developer is a professional responsible for working on both front-end and back-end development processes. we design, develop, and maintain fully-fledged and functioning platforms with databases or servers. These servers do not need other third-party applications to build an entire system from scratch.</p>
               
                  </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 head-image" style={{width:"300px",height:"400px"}}><img src={image11} alt='logo' style={{height:"100%",borderRadius:"50%"}}/></div>
                 
   </section>
{ /* head sectiion end */ }
 

{ /* about sectiion start */ }

<section  class="about-section  " id='aboutid'>
        <h1 class="text-center ">ABOUT ME</h1> 
            <div className="row   ">
              <div class="col-12 col-lg-3 col-md-3 col-sm-12 pl-5 aboutavtar  "><img src={profile} alt="avatar" /></div>
              <div class=" abouttext col-12 col-lg-8 col-md-12 col-sm-12 " >
                Hello, i am Shivaprasad  <br/>
                 A Focused aspirant MERN stack Developer  with FrontEnd &BackEnd technolgies Buliding web applications that leads to sucess of overall products<br/>
                 <p> I am recent graduate from Teegala Krishna Reddy (TKR) College Of Engineering and have done my major in Electronics & Communication Engineering. <br/> I'm enthusiastic to start my career in Software field.</p>
                  
               <div class="col-lg-6 col-md-4 col-sm-4 col-4 "> <button class="btn btn-primary" ><a href={resume} download="ShivaprasadPabbuResume MERN.pdf" style={{width:"200px",height:"100px" ,color:"black"}} >Download cv </a></button></div>
               
            </div>
            </div>
         

       </section>
     
<section className="skills" id='skillid' >
  <h1 className="text-center">SKILLS</h1>
  <div className="container" >
    <div className="row justify-content-center align-items-center">
    <Skill
      img={image1}
      name="HTML"
      />
      <Skill
      img={image2}
      name="CSS"
      />
      <Skill
      img={image3}
      name="JavaScript"
      />
      <Skill
      img={image4}
      name="React"
      />
      <Skill
      img={image5}
      name="NodeJs"
      />
      <Skill
      img={image6}
      name="MongoDB"
      />
    </div>
  </div>
</section>


<h1 class="text-center ">Projects</h1>
<br/><br/><br/>
<section class="project-section" id='projectid'>
  
<div class="row ">
  <div class=" col-lg-3 col-md-6 col-sm-12 col-12">
    <div class="card h-100">
      <img src={image10} class="card-img-top"
        alt="Skyscrapers" />
      <div class="card-body bg-primary">
        <h2 class="card-title">My Portfolio</h2>
        <p class="card-text">
          Portfolio project gives you breif details about me
        </p>
      </div>
        <div className=" card-footer">
                  <a href='#'> View website</a>
                 </div>
      
    </div>
  </div>
  <div class=" col-lg-3 col-md-6 col-sm-12 col-12">
    <div class="card h-100">
      <img src={image9} class="card-img-top"
        alt="Skyscrapers" />
      <div class="card-body bg-warning">
        <h2 class="card-title">Real Time Chat application</h2>
        <p class="card-text">
       We can communitcate with our beloved ones from this project.this was awesome 
        </p>
      </div>
        <div className=" card-footer">
                  <a href='#'> View website</a>
                 </div>
     
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 col-12">
    <div class="card h-100">
      <img src={image7} class="card-img-top"
        alt="Los Angeles Skyscrapers" />
      <div class="card-body bg-muted">
        <h2 class="card-title">TO-DO LIST</h2>
        <p class="card-text">This project can help us in simple way. we can use as Check list of our daliy activiteis</p>
      </div>
        <div className="card-footer">
                  <a href='https://todo-web-app-project.vercel.app/'> View website</a>
                 </div>
      
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 col-12">
    <div class="card h-100">
      <img src={image8} class="card-img-top"
        alt="Palm Springs Road" />
      <div class="card-body bg-danger">
        <h2 class="card-title">Blog Project</h2>
        <p class="card-text">
          This project show us Movies in Bollywood ,Hollywood,and Tollywood Star rated movies and some tasty food items list
        </p>
      </div>
        <div className=" card-footer">
                  <a href='https://react-blogproject.vercel.app/'> View website</a>
                 </div>
      
    </div>
  </div>
</div>
</section>
<section class="contactme bg-dark text-center text-white" id="contactid">
  <div class="contact-content">
     <div class="contact-info">
      <h1>Contact ME</h1>
      <h2>Get in Touch with me</h2>
      <p>I'm enthusiastic to start my career in your organisation.</p>
      <p>I can assure you that I'm Adaptable, Passionate, Motivated, Goal-oriented, Proactive in work.</p>
      
     
      <div class="contact-links">
        <a class="btn btn-outline-light btn-floating m-1" href="mailto:shivapabbu718@gmail.com" role="button"><i class="fa fa-envelope"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/pabbu-shivaprasad-215687225" role="button"><i class="fab fa-linkedin-in"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/shivapabbu1" role="button"><i class="fab fa-github"></i></a>
      </div>

      
      <div class="text-center p-4">
        © Shivaprasad  Pabbu
      </div>
    </div>
  
  </div>
</section>

    </div>
     </> 
  )
}

export default Home
