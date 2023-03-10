import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Users from '../users/Users'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='main__wrapper'>
        <Sidebar />
        <div className='main__content'>
            <Users />
        </div>
      </div>
    </div>
  )
}

export default Home
