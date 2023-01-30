import React, { useState } from 'react'
import UsersCard from '../../components/userscard/UsersCard'
import {UsersInfo} from '../../../src/usersInfo';
import UsersTables from '../../components/users_tables/UsersTables';

const Users = () => {
    const usersSummary = UsersInfo;
    console.log(usersSummary);
  return (
    <div className='main__content__inner'>
      <h1>Users</h1>
      <div className='users__card__wrapper'>
        {usersSummary.map(usersInfo => {
            return (
                <UsersCard key={usersInfo.id} title={usersInfo.title} img={usersInfo.img} total={usersInfo.total_users} />
            )
        })}
      </div>
      <div className='dashboard__content'>
        <UsersTables  />
      </div>
    </div>
  )
}

export default Users
