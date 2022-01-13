import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../api";
import { getTypeClass } from "../util/functions";

const PokeCard = ({ name }) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    getPokemonByName(name).then((response) => setPokemon(response));
  }, [name]);
  console.log(`pokemon`, pokemon);
  const { sprites, types } = pokemon;
  const pokeImage = sprites?.other["official-artwork"].front_default;
  const pokeTypes = types?.map((type) => type.type.name);
  return (
    <div className="card my-6">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={pokeImage} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            {pokeTypes?.map((type, index) => (
              <span key={index} className={`type ${getTypeClass(type)}`}>
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="content">blabla</div>
      </div>
    </div>
  );
};

PokeCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokeCard;
