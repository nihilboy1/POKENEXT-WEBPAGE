import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.content_box}>
      <h1 className={styles.codedby}>
        Coded by {""}
        <span className={styles.spannihil}>
          <a target={`_blank`} href="https://github.com/nihilboy1">
            @Nihilboy
          </a>
        </span>
      </h1>
      <div>
        <Image
          src="/images/charizard.png"
          alt="Pokemon Charizard"
          width={350}
          height={350}
          className={styles.chariimage}
        />
      </div>
    </div>
  )
}

export default About
