import React from 'react'
import logo from '../asserts/logo.png'

import classes from './Logo.module.css'
const Logo = () => {
  return (
    <div className={classes.container}> 
      <img src={logo} alt="logo" />
      
    </div>
  )
}

export default Logo
