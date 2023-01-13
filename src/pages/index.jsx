import axios from "axios";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import PokeCard from "../components/PokeCard";

import { useState } from "react";

export async function getStaticProps() {
  const MAXPOKEMONS = 387;
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

export default function Home({ pokemons }) {
  const [itensPerPage, setItensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const startIndex = (currentPage - 1) * itensPerPage;
  const endIndex = Math.min(startIndex + itensPerPage, pokemons.length);
  const currentItens = pokemons.slice(startIndex, endIndex);

  return (
    <div className={styles.homeContent}>
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
        disabled={itensPerPage >= 387 ? true : false}
        className={styles.loadMorePokemons}
        onClick={() => setItensPerPage(itensPerPage + 20)}
      >
        {itensPerPage >= 387
          ? "The content ends here 😕"
          : "Load more content 😎"}
      </button>
      <button
        onClick={() => {
          scrollToTop();
        }}
        className={styles.loadMorePokemons}
      >
        Voltar ao topo
      </button>
    </div>
  );
}
