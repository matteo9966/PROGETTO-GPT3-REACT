import React from 'react'
import styles from './footer.module.css'
import gpt3Logo from '../../assets/logo.svg';
export const Footer = () => {
  return (
    <div className={`${styles['gpt3__footer']} section__padding`}>
      <div className={styles['gpt3__footer-heading']}>
        <h1 className={'gradient__text'}> Do you wabt ti steo in the future before others</h1>
      </div>
      <div className={styles['gpt3__footer-btn']}>
        <p>Request Early Access</p>
      </div>
      <div className={styles['gpt3__footer-links']}>
        <div className={styles['gpt3__footer-links_logo']}>
          <img src={gpt3Logo} alt="logo" />
          <p></p>
        </div>
        <div className={styles['gpt3__footer-links_div']}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={styles['gpt3__footer-links_div']}>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={styles['gpt3__footer-links_div']}>
          <h4>Get In Touch</h4>
          <p>Terms and Conditions</p>
          <p>gpt3.gpt@gp.com</p>
          <p>055.555-12-1</p>
          <p>Contact</p>
        </div>
      </div>
         <div className={styles['gpt3__footer-copyright']}>
           <p>Copyright: All rights reserved|!</p>
         </div>
    </div>
  )
}
