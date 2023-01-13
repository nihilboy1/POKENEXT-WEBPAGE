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
    `https://pokeapi.co/api/v2/pokemon/${id}?fields=name,id,types,height,weight,sprites,stats`
  );

  return {
    props: {
      pokemon: data,
    },
  };
}

const PokemonId = ({ pokemon }) => {
  const { id, name, types, height, weight, sprites, stats } = pokemon;

  return (
    <>
      <div className={styles.detailsBox}>
        <div className={styles.content}>
          <div className={styles.imageBox}>
            <span className={styles.pokeName}>{name}</span>
            <img
              src={sprites.front_default}
              className={styles.pokemon_image}
              alt={`Foto do ${name}`}
            />
          </div>
          <div className={styles.infosBox}>
            <section className={styles.pokeStats}>
              <p>ID: </p>
              <span>#{id}</span>
            </section>
            <section className={styles.pokeStats}>
              <p>HP:</p>
              <span>{stats[0].base_stat}</span>
            </section>
            <section className={styles.pokeStats}>
              <p>Attack:</p>
              <span>{stats[1].base_stat}</span>
            </section>
            <section className={styles.pokeStats}>
              <p>Defense:</p>
              <span>{stats[2].base_stat}</span>
            </section>
            <section className={styles.pokeStats}>
              <p>Speed:</p>
              <span>{stats[5].base_stat}</span>
            </section>
            <section className={styles.pokeStats}>
              <p>Type:</p>
              {types.map(({ type }, index) => {
                return (
                  <span
                    className={`${styles.type} ${styles["type" + type.name]}`}
                    key={index}
                  >
                    {type.name}
                  </span>
                );
              })}
            </section>
            <section className={styles.pokeStats}>
              <p>Height: </p>
              <span>{height}0cm</span>
            </section>
            <section className={styles.pokeStats}>
              <p>Weight: </p>
              <span>{weight / 10}kg</span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonId;
