import React from 'react'
import styles from './header.module.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png';
export const Header = () => {
  return (
    <div className={`${styles['gpt3__header']} section__padding`} id="home">
      <div className={styles['gpt3__header-content']}>
        <h1 className={"gradient__text"}>
          Let's Build something amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, ratione.</p>
        <div className={styles['gpt3__header-content__input']}>
          <input type="email" placeholder='your email...' />
          <button type='button'>Get Started</button>
        </div>
        <div className={styles['gpt3__header-content__people']}>
          <img src={people} alt="people" />
          <p>1600 people registered in the past 24 hours</p>
        </div>
      </div>
        <div className={styles['gpt3__header-image']}>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}
