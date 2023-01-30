import React from 'react'
type userInfoProps = {
    id?: number,
    title: string,
    img: string,
    total: string
}

const UsersCard = ({id, title, img, total}: userInfoProps) => {
  return (
    <div className='users__card'>
      <div className='image__wrap'>
        <img src={img} alt="users" />
      </div>
      <p className='title-info'>{title}</p>
      <p className='total-info'>{total}</p>
    </div>
  )
}

export default UsersCard
