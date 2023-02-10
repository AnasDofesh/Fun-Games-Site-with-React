import React from 'react'
import './NavItem.css'

const NavItem = (props) => {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}

export const NavItemDropDown = (props) => {
  return (
    <li className='nav-item dropdown'>
        {props.children}
    </li>
  )
}

export default NavItem