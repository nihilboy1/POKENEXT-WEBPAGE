import Link from "next/link";
import styles from "../styles/PokeCard.module.css";
import { useState, useRef } from "react";

const PokeCard = ({ poke }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOver, setMouseOver] = useState(false);
  const cardRef = useRef();

  const handleMouseMove = (event) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setMouseOver(false);
  };

  const rotateX = mouseOver ? (mousePosition.y - 0.5) * 30 : "0";
  const rotateY = mouseOver ? (mousePosition.x - 0.5) * 30 : "0";
  const boxShadow = mouseOver
    ? `${10 * mousePosition.x - 5}px ${
        10 * mousePosition.y - 5
      }px 5px 0px rgba(0, 0, 0, 0.274)`
    : "0px 0px 3px white";
  const style = {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    boxShadow,
  };

  return (
    <Link href={`/pokemon/${poke.id}`}>
      <li
        ref={cardRef}
        className={styles.pokemonCard}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
            width="130"
            alt={poke.name}
            className={styles.pokeImage}
          />

          <a className={styles.pokemonNameBox}>
            <p>#{poke.id}</p>
            <h3>{poke.name}</h3>
          </a>
        </div>
      </li>
    </Link>
  );
};

export default PokeCard;
