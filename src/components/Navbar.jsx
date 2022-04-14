import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar_box}>
      <div className={styles.logotext_box}>
        <Link href="/" passHref={true}>
          <Image
            src="/images/pokedex.png"
            alt="Logo pokebola"
            width="75"
            height="60"
            className={styles.pokeimg}
          />
        </Link>
        <h1 className={styles.title}>PokeNext</h1>
      </div>
      <ul className={styles.ul_box}>
        <li className={styles.link_item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
