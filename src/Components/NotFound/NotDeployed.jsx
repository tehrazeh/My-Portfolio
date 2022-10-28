import React from 'react'
import s from './NotDeployed.module.css'

 const NotDeployed = () => {
  return (
    <div className={s.wrapper}>
        <img src={process.env.PUBLIC_URL + '/sorry.png'} alt='sorry'></img>
        <h2>I did not deploy this project... Yet.</h2>
    </div>
  )
}

export default NotDeployed