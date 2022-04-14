import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokeCard from '../components/PokeCard'

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
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  console.log(pokemons)
  return (
    <>
      <div className={styles.home_content}>
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
          {pokemons.map(poke => {
            return (
              <PokeCard
                key={poke.id}
                poke={poke}
              ></PokeCard>
            )
          })}
        </ul>
      </div>
    </>
  )
}
