import React from 'react'
import PageHeader from './PageHeader'
import NewUser from '../components/newUser/NewUser'

export default function AddNewUser() {
  return (
    <div>
      <PageHeader title='new user' subTitle='add new user'/>
      <NewUser/>
    </div>
  )
}
