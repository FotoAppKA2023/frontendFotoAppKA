import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home
        <Link to={'/about'}>ABOUT</Link>
    </div>
  )
}

export default Home