import React from 'react'
import {useNavigate}from 'react-router-dom';

const Home = () => {
    const naviagte = useNavigate();

    const orderHandler = () => {
        naviagte('order-summay');
    }

  return (
    <div>
        <h2>Home page</h2>
        <button onClick={orderHandler}>Place order</button>
    </div>
  )
}

export default Home