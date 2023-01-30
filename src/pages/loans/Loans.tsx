import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'


const Loans = () => {
  return (
    <div>
      <Header />
        <div className='main__wrapper'>
            <Sidebar />
            <div className='main__content'>
                <div className='main__content__inner'>
                    <h1>Loans</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loans
