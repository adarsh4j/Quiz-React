import React from 'react'
import Style from '../Landing/landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <header className= {Style.heading} >
        <h2 className={Style.head}>PROBES</h2>
        <p className={Style.sen}>The quiz you should try .....</p>
        <nav>
            <li className={Style.list}>
            <a href="/">Home</a>
            <a href="#About">About</a>
            <a href="#Uses">Uses</a>
            
            </li>
        </nav>
      </header>
      <section className={Style.s1} id='About'>
        <h1 style={{fontSize:'48px'}}>ABOUT</h1>
        <p style={{fontSize:'22px', padding:'10px',fontWeight:'44px'}}>Welcome to our Quiz Platform! Dive into a world of fun, learning, and challenges that test your knowledge across various topics. Whether you're a trivia enthusiast, a curious learner, or just looking for some engaging entertainment, our quizzes are designed to spark curiosity and inspire growth. Compete with friends, track your progress, and discover fascinating facts along the way. Let the journey of exploration and self-discovery begin—because every question is an opportunity to learn something new !</p>
        <Link to='/quiz'>
        <button className={Style.button}>Let's Get Start</button>
        </Link>
        <img src="quiz.png" alt="Quiz" className={Style.image1} />
      </section>
      <img src="science.png" alt="Quiz" className={Style.image2}/>

      <section className={Style.s1} id='Uses'>
        <h1 style={{fontSize:'48px'}}>USES</h1>
        <p style={{fontSize:'22px', padding:'10px',fontWeight:'44px'}}>Quizzes are an effective tool for learning, engagement, and assessment, offering a dynamic way to evaluate knowledge and skills. They are widely used in education to reinforce concepts and encourage active recall, making learning more interactive and enjoyable. In professional settings, quizzes serve as a means to gauge employee training effectiveness and identify areas for improvement. They also play a significant role in personal growth, helping individuals test their understanding of various topics and track progress. Additionally, quizzes are popular in entertainment and social media, creating opportunities for fun and connection while sparking curiosity and discussion. Their versatility makes quizzes a valuable resource across diverse fields and purposes.</p>
      
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    maxWidth: "600px",
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
  }}
><br />
<li style={{ marginBottom: "20px", textAlign: "left", width: "100%" ,fontSize:'18px', fontFamily:'cursive'}}>
    Quizzes reinforce learning by helping users recall and apply knowledge.
  </li>
  <li style={{ marginBottom: "20px", textAlign: "left", width: "100%" ,fontSize:'18px', fontFamily:'cursive'}}>
  They are an engaging tool for assessing skills in educational and professional environments.
  </li>
  <li style={{ marginBottom: "20px", textAlign: "left", width: "100%" ,fontSize:'18px', fontFamily:'cursive'}}>
  Quizzes promote interactive learning and make complex topics more digestible.
  </li>
  <li style={{ marginBottom: "20px", textAlign: "left", width: "100%" ,fontSize:'18px', fontFamily:'cursive'}}>
  In professional training, quizzes evaluate understanding and identify areas for improvement.
  </li>
  <li style={{ marginBottom: "20px", textAlign: "left", width: "100%" ,fontSize:'18px', fontFamily:'cursive'}}>
  They are widely used in social media and entertainment to drive engagement and fun.
  </li>
</div>

      </section>



    </div>
  )
}

export default Landing
