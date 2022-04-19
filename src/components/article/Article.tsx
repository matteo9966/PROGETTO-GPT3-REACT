import React from 'react'
import styles from './article.module.css';
export const Article:React.FC<{imgUrl:string,date:string,title:string}> = (props) => {
  return (
    <div className={'gpt3__blog-container_article'}>
      <div className={styles['gpt3__blog-container_article-image']}>
        <img src={props.imgUrl} alt='blog image' />
      </div>
      <div className={styles['gpt3__blog-container_article-content']}>
        <div>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>
      <p>Read full Article</p>
      </div>
    </div>
  )
}
