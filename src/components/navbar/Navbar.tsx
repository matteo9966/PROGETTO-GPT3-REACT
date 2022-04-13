import React,{useState} from 'react'
import styles from './navbar.module.css';
import logo from '../../assets/logo.svg';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'

const Menu:React.FC= ()=> <>
    <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt3">What is GPT?</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#blog">Blog</a></p>
</>

export const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles['gpt3__navbar-links']}>
        <div className={styles['gpt3__navbar-links_logo']}>
          <img src={logo} alt='logo'></img>
        </div>
        <div className={styles['gpt3__navbar-links_container']}>
       <Menu></Menu>
        </div>
      </div>
      <div className={styles['gpt3__navbar-sign']}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles["gpt3__navbar-menu"]}>
     {toggleMenu ? <RiCloseLine color="white" size={27} onClick={()=>{setToggleMenu(false)}}
                    ></RiCloseLine>
                 : <RiMenu3Line color="white" size={27} onClick={()=>{setToggleMenu(true)}}
                 ></RiMenu3Line>}
      {toggleMenu && (<div className={`${styles['gpt3__navbar-menu_container']} ${styles['scale-up-center']}`}>
        <div className={"gpt3__navbar-menu_container-links"}>
       <Menu></Menu>
       <div className={styles['gpt3__navbar-menu_container-links-sign']}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
        </div>
      </div>)}

      </div>
    </div>
  )
}
