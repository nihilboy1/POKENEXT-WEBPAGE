import Image from "next/image";
import styles from "../../styles/PokemonId.module.css";
import axios from "axios";

export async function getStaticPaths() {
  const MAXPOKEMONS = 251;
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const { data } = await axios.get(`${apiUrl}/?limit=${MAXPOKEMONS}`);

  //params
  const paths = data.results.map((poke, index) => {
    return {
      params: {
        pokemonid: (index + 1).toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(paths) {
  const id = paths.params.pokemonid;
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}?fields=name,id,types,height,weight,sprites`
  );

  return {
    props: {
      pokemon: data,
    },
  };
}

const PokemonId = ({ pokemon, image }) => {
  const { id, name, types, height, weight, sprites } = pokemon;
  console.log();

  return (
    <div className={styles.details_box}>
      <div className={styles.image_box}>
        <Image
          src={sprites.front_default}
          width="205"
          height="205"
          className={styles.pokemon_image}
          alt={name}
        />
      </div>
      <div className={styles.text_detail_box}>
        <p className={styles.poke_name}>
          <span className={styles.poke_name}>#{id} </span>
          {name}
        </p>
        <p className={styles.poke_type}>
          Type:
          {types.map(({ type }, index) => {
            return (
              <p
                className={`${styles.type} ${styles["type_" + type.name]}`}
                key={index}
              >
                {type.name}
              </p>
            );
          })}
        </p>
        <p className={styles.poke_stats}>Height: {height}0cm</p>
        <p className={styles.poke_stats}>Weight: {weight / 10}kg</p>
      </div>
    </div>
  );
};

export default PokemonId;
