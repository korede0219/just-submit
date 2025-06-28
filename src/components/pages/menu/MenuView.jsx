import React from 'react'
import PizzaList from './PizzaList'

const MenuView = () => {
  return (
    <div className="container">
      <h1 className="mt-5 text-primary">Welcome To Our Menu</h1>
      <p>Explore our delicious offerings!</p>
      <PizzaList/>  
    </div>
  )
}

export default MenuView