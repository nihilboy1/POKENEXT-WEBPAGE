import axios from "axios";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import PokeCard from "../components/PokeCard";
import Clouds from "../components/Clouds";

import { useState } from "react";

export async function getStaticProps() {
  const MAXPOKEMONS = 251;
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  const { data } = await axios.get(`${apiUrl}?limit=${MAXPOKEMONS}`);

  // add pokemon index
  data.results.forEach((item, index) => {
    return (item.id = index + 1);
  });

  return {
    props: {
      pokemons: data.results,
      quantiItens: MAXPOKEMONS,
    },
  };
}

export default function Home({ pokemons, quantiItens }) {
  const [itensPerPage, setItensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(quantiItens / itensPerPage);

  const startIndex = (currentPage - 1) * itensPerPage;
  const endIndex = Math.min(startIndex + itensPerPage, pokemons.length);
  const currentItens = pokemons.slice(startIndex, endIndex);

  return (
    <div className={styles.homeContent}>
      <Clouds />

      <div className={styles.homeTitleBox}>
        <h1 className={styles.homeTitle}>PokeNext</h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="Pokebola imagem"
        ></Image>
      </div>
      <ul className={styles.mainPokemonContainer}>
        {currentItens.map((poke) => {
          return <PokeCard key={poke.id} poke={poke} />;
        })}
      </ul>
      <button
        disabled={itensPerPage >= 251 ? true : false}
        className={styles.loadMorePokemons}
        onClick={() => setItensPerPage(itensPerPage + 20)}
      >
        {itensPerPage >= 251
          ? "Todos os pokemons foram carregados"
          : "Carregar mais pokemons"}
      </button>
    </div>
  );
}
