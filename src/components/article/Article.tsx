import React from 'react'
import styles from './article.module.css';
export const Article:React.FC<{imgUrl:string}> = (props) => {
  return (
    <div className={styles['gpt3__blog-container_article']}>
      <div className={styles['gpt3__blog-container_article-image']}>
        <img src={props.imgUrl} alt='blog image' />
      </div>
    </div>
  )
}
