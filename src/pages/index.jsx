import axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PokeCard from "../components/PokeCard";
import Clouds from "../components/Clouds";
import { useState } from "react";
import Pagination from "../components/Pagination";

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
    <div className={styles.home_content}>
      <Clouds />
      <Pagination
        totalPages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
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
        {currentItens.map((poke) => {
          return <PokeCard key={poke.id} poke={poke} />;
        })}
      </ul>
    </div>
  );
}
