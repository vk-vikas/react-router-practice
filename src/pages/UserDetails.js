import React from 'react'
import {useParams}from 'react-router-dom'

const UserDetails = () => {
  const parmas = useParams();
  return (
    <div>UserDetails of user {parmas.id}</div>
  )
}

export default UserDetails