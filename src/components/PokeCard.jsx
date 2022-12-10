import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PokeCard.module.css'

const PokeCard = props => {
  return (
    <Link href={`/pokemon/${props.poke.id}`} passHref={true}>
      <li className={styles.pokemon_li}>
        <a target="_blank">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.poke.id}.png`}
            width="130"
            height="130"
            alt={props.poke.name}
            className={styles.poke_image}
          />
        </a>

        <a className={styles.pokemon_link}>
          <p>#{props.poke.id}</p>
          <h3>{props.poke.name}</h3>
        </a>
      </li>
    </Link>
  )
}

export default PokeCard
