import React from 'react'
import error from './assets/error.png'
import _notFound from './assets/404.png'
import s from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={s.wrapper}>
    <div className={s.imageBlock}>
        <img className={s.notFoundImage} src={error} alt='error'/>
        <img className={s.notFoundImage} src={_notFound} alt='notfound'/>
    </div>
    <div className={s.textBlock}>
        <h1>Borders are broken</h1>
        <h2>You reached unexplored lands</h2>
    </div>
        
    </div>
    
  )
}

export default NotFound