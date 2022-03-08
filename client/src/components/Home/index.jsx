import React from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
  return (
    <div>
        <NavBar />
        <h1>Home</h1>
        <p>This is the home page</p>
    
    </div>
  )
}

export default Home;