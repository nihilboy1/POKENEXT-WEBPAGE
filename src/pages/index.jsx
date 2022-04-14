import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokeCard from '../components/PokeCard'
import Clouds from '../components/Clouds'
import { useState } from 'react'
import Pagination from '../components/Pagination'

export async function getStaticProps() {
  const maxPokemons = 151
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${apiUrl}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    return (item.id = index + 1)
  })

  return {
    props: {
      pokemons: data.results,
      quantiItens: maxPokemons
    }
  }
}

export default function Home({ pokemons, quantiItens }) {
  const [itensPerPage, setItensPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(quantiItens / itensPerPage)

  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = pokemons.slice(startIndex, endIndex)

  return (
    <>
      <div className={styles.home_content}>
        <Clouds />
        <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
        <div className={styles.home_title_box}>
          <h1 className={styles.home_title}>PokeNext</h1>
          <Image
            src="/images/pokeball.png"
            width={50}
            height={50}
            alt="Pokebola imagem"
          ></Image>
        </div>
        <ul className={styles.main_pokemon_container}>
          {currentItens.map(poke => {
            return <PokeCard key={poke.id} poke={poke}></PokeCard>
          })}
        </ul>
      </div>
    </>
  )
}
