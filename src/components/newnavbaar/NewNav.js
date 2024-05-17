import React from 'react'
import "./newNav.css"
import { NavLink } from 'react-router-dom'

const NewNav = () => {
  return (
    <div className='new_nav'>
      <div className="nav_data">
        <div className="left_data">
          <NavLink to="/"><p> All</p></NavLink>
          <NavLink to="/getproductsone/products9"><p>Mobile</p></NavLink>
          <NavLink to="/getproductsone/products20"><p>Bestseller</p></NavLink>
          <NavLink to="/getproductsone/products12"><p>Fashion</p></NavLink>
          <NavLink to="/getproductsone/products11"><p>Customer Services</p></NavLink>
          <NavLink to="/getproductsone/products17"><p>Electronics</p></NavLink>
          <NavLink to="/getproductsone/products16"><p>Men's Clothings</p></NavLink>
          <NavLink to="/getproductsone/products18"><p>Women's Clothings</p></NavLink>
          <NavLink to="/getproductsone/products19"><p>Today's deals</p></NavLink>
        </div>
        <div className="right_data">
          <img src="./nav.jpg" alt="navdata" />
        </div>
      </div>
    </div>
  )
}

export default NewNav