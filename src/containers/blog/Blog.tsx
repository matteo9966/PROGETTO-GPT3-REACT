import styles from './blog.module.css';
import React from 'react'
import { Article } from '../../components/article/Article';
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from './imports'
export const Blog = () => {
  return (
    <div className={`${styles['gpt3__blog']} section__padding`} id="blog">
      <div className={styles['gpt3__blog-heading']}>
        <h1 className="gradient__text">A lot is Happening! We are Blogging about it</h1>
      </div>
      <div className={styles['gpt3__blog-container']}>
        <div className={styles['gpt3__blog-container_groupA']}>
          <Article imgUrl={blog01}></Article>
        </div>
        <div className={styles['gpt3__blog-container_groupB']}>
          <Article imgUrl={blog02}></Article>
          <Article imgUrl={blog03}></Article>
          <Article imgUrl={blog04}></Article>
          <Article imgUrl={blog05}></Article>
        </div>
      </div>
      Blog</div>
  )
}
