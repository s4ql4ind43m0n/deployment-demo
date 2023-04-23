import React from 'react'
import service from '../assets/service.png'
import job from '../assets/job.png'
import { Link } from 'react-router-dom'
const SignUpTypes = () => {

  const types = [{type: service, title:"I Am Looking For Services ", link: "../clientSignUp"},{type: job, title:"I Am Looking For A Job", link:"../ApplicationForm"}]
  return (
    <div>
    <div class="card-group">
    { types.map((t)=>{
   return( 
<div class="card my-5 mx-5 text-center" >
  <img src={t.type} alt={t.type} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{t.title}</h5><Link to={t.link}>
    <div class="btn btn-success">Get Started</div></Link>
  </div>
</div>
    )})}
    
    </div>
    <div class="card my-5 mx-5 text-center" >
      <h1>Already a member? Sign In Now</h1>
      <Link to="../signin">
      <button className='btn btn-success'>Sign In</button></Link>
      </div>
  </div>
  )
}

export default SignUpTypes
