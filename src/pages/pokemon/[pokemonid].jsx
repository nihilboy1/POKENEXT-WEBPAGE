import React from 'react'
import Image from 'next/image'
import styles from '../../styles/PokemonId.module.css'

export async function getStaticPaths() {
  const maxPokemons = 251
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${apiUrl}/?limit=${maxPokemons}`)
  const data = await res.json()

  //params
  const paths = data.results.map((poke, index) => {
    return {
      params: {
        pokemonid: (index + 1).toString()
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}
export async function getStaticProps(context) {
  const id = context.params.pokemonid
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return {
    props: {
      pokemon: data
    }
  }
}

const PokemonId = props => {
  return (
    <div className={styles.details_box}>
      <div className={styles.image_box}>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${props.pokemon.id}.png`}
          width="220"
          height="220"
          alt={props.pokemon.name}
        />
      </div>
      <div className={styles.text_detail_box}>
        <p className={styles.poke_name}>
          <span className={styles.poke_name}>#{props.pokemon.id} </span>
          {props.pokemon.name}
        </p>
        <p className={styles.poke_type}>
          Type:
          {props.pokemon.types.map((item, index) => {
            if (item) {
              return (
                <p
                  className={`${styles.type} ${
                    styles['type_' + item.type.name]
                  }`}
                  key={index}
                >
                  {item.type.name}
                </p>
              )
            }
          })}
        </p>
        <p className={styles.poke_stats}>Height: {props.pokemon.height}0cm</p>
        <p className={styles.poke_stats}>
          Weight: {props.pokemon.weight / 10}kg
        </p>
      </div>
    </div>
  )
}

export default PokemonId
