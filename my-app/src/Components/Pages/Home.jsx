import React from 'react'

import './Home.css';
import  image1 from "../Assets/image1.jpg"
import  image2 from "../Assets/css.png"
import  image3 from "../Assets/js.png"
import  image4 from "../Assets/react.jpg"
import  image5 from "../Assets/node.png"
import  image6 from "../Assets/mongodb.jpg"
import image7 from "../Assets/todo.jpg"
import image8 from "../Assets/blog.png"
import image9 from "../Assets/chat.png"
import image10 from "../Assets/images.jpg"
import resume from "../Assets/My Resume.pdf"

import image11 from "../Assets/images 11.jpg"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
    <div class="container">
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
    { /* head sectiion start */ }

      <section class=" Head d-flex justify-content-center  row text-white ">
        
      <div class=" col-8">    
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
{/*                   <div className="col-lg-4 col-md-6 col-sm-12 head-image" style={{width:"300px",height:"400px"}}><img src={image11} alt='logo' style={{height:"100%",borderRadius:"50%"}}/></div>
                  */}
   </section>
{ /* head sectiion end */ }
 

{ /* about sectiion start */ }

       <section  class="about-section  " id='aboutid'>
        <h1 class="text-center ">ABOUT ME</h1> 
            <div className="row   ">
              <div class="col-12 col-lg-3 col-md-3 col-sm-12 pl-5 aboutavtar  "><img src={image10} alt="avatar" /></div>
              <div class="col-12 col-lg-8 col-md-12 col-sm-12  ml-5" >
                Hello, i am Shivaprasad  <br/>
                 A Focused aspirant MERN stack Developer  with FrontEnd &BackEnd technolgies Buliding web applications that leads to sucess of overall products<br/>
                 <p> I am recent graduate from Teegala Krishna Reddy (TKR) College Of Engineering and have done my major in Electronics & Communication Engineering. <br/> I'm enthusiastic to start my career in Software field.</p>
                  
               <div class="col-lg-6 col-md-4 col-sm-4 col-4 "><i class="fa fa-download p-2" style={{fontSize:"3rem"}}/> <button class="btn btn-primary" ><a href={resume} download="shivaprasadResume.pdf" style={{width:"200px",height:"100px" ,color:"black"}} >Download cv </a></button></div>
               
            </div>
            </div>
         

       </section>
     
{ /* second sectiion end */ }
        <h1 class="text-center mt-10">SKILLS</h1> 
        <section class="skills" id='skillid'>
          <div className="container d-flex justify-content-center align-items-center " style={{minHeight:"50vh"}}>
        <div className=" row ">
              <div className=" img col-6 col-lg-2 col-md-3 col-sm-6 ">
                    <img src={image1} alt='htmllogo'/> 
                    <h5>HTML</h5> 
               </div>
               <div className=" img col-6 col-lg-2 col-md-4 col-sm-6 ">
                    <img src={image2} alt='csslogo'/>
                    <h5>css:</h5> 
                </div>
                <div className=" img col-6 col-lg-2 col-md-4 col-sm-6 ">
                    <img src={image3} alt='jslogo'/> 
                    <h5>javascript:</h5>
                 </div>
                 <div className=" img col-6 col-lg-2 col-md-4 col-sm-6 ">
                    <img src={image4} alt='reactlogo'/> 
                    <h5>React:</h5> 
                 </div>
                 <div className=" img col-6 col-lg-2 col-md-4 col-sm-6 ">
                    <img src={image5} alt='nodelogo'/> 
                    <h5>Node.js:</h5>
                 </div>
                 <div className=" img col-6 col-lg-2 col-md-4 col-sm-6 ">
                    <img src={image6} alt='dblogo'/>
                    <h5>MongoDB:</h5> 
                </div>
                
                
        </div>
        </div>

</section>


<h1 class="text-center ">Projects</h1>
<br/><br/><br/>
<section class="project-section" id='projectid'>
  
<div class="row ">

      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
    <div class="card h-100">
      <img src={image8} class="card-img-top"
        alt="Palm Springs Road" />
      <div class="card-body bg-danger">
        <h2 class="card-title">Weather App</h2>
        <p class="card-text">
         Simple weather application using javascript and css and weather API.
        </p>
      </div>
        <div className=" card-footer">
                  <a href='https://javascript-projects-ngx7-git-main-shivapabbu1.vercel.app/' target="blank"> View website</a>
                 </div>















  
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
                  <a href='https://shivaprasad-portfolio.vercel.app/' target="blank"> View website</a>
                 </div>
      
    </div>
  </div>
       <div class=" col-lg-3 col-md-6 col-sm-12 col-12">
    <div class="card h-100">
      <img src={image11} class="card-img-top"
        alt="Skyscrapers" />
      <div class="card-body bg-primary">
        <h2 class="card-title">E-commerce</h2>
        <p class="card-text">
        Simple demo application of e-commerce front-end application.
        </p>
      </div>
        <div className=" card-footer">
                  <a href='https://front-end-e-commerce-git-master-shivapabbu1.vercel.app/' target="blank"> View website</a>
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
                  <a href='#' target="blank"> View website</a>
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
                  <a href='https://todo-web-app-project.vercel.app/' target="blank"> View website</a>
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
                  <a href='https://react-blogproject.vercel.app/' target="blank"> View website</a>
                 </div>


      
    </div>
  </div>
</div>
</section>




  <section class="contactme bg-dark text-center text-white" id='contactid'>
  <h1 class="text-center">Contact ME</h1>
      <div>
        <h2>Get in Touch with me</h2>
      </div>
      <div>
        <p>I'm enthusiastic to start my career in your organisation. </p>
       <p>I can assure you that I'm Adaptable, Passionate, Motivated, Goal-oriented, Proactive in work.</p>
      </div>
      
    
     


    <div >
      <a class="btn btn-outline-light btn-floating m-1" href=" mailto:shivapabbu718@gmail.com" role="button"
        ><i class="fa fa-envelope "></i
      ></a>

    

    
      <a class="btn btn-outline-light btn-floating m-1" href="www.linkedin.com/in/
pabbu-shivaprasad-215687225
" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/shivapabbu1" role="button"
        ><i class="fab fa-github"></i
      ></a>

      </div>

      <div class="text-center p-4">
    © Shivaprasad Pabbu
    
  </div>
  </section>
    </div>
        
           
        </> 
  )
}

export default Home
