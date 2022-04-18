import React from 'react'
import styles from './cta.module.css';
export const CTA = () => {
  return (
    <div className={styles['gpt3__cta']}>
     <div className={styles['gpt3__cta-content']}>
       <p>Request early Access</p>
       <h3>Register today and start exploring</h3>
     </div>
     <div className={styles['gpt3__cta-btn']}>
       <button type='button'>Get Started</button>
     </div>
    </div>
  )
}
