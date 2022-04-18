import React from 'react'
import styles from './possibility.module.css'
import possibilityImage from '../../assets/possibility.png' ;
export const Possibility = () => {
  return (
    <div className={`${styles['gpt3__possibility']} section__padding` } id="possibility">
      <div className={styles['gpt3__possibility-image']}>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className={styles['gpt3__possibility-content']}>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond our immagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorem?</p>
        <h4>Request for early access</h4>
      </div>
    </div>
  )
}
