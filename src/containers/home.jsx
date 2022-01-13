import { useEffect, useState } from "react";
import PokeCard from "../components/pokecard";
import NavBar from "../components/navbar";
import { getAllPokemon, getPokemonByName } from "../api/index";
import useForm from "../hook/useForm";

const Home = () => {
  const [{ name }, handleInputChange] = useForm({ name: "" });
  const [pokemon, setPokemon] = useState([]);
  console.log("pokemon :>> ", pokemon.name);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPokemon().then((response) => {
      setPokemons(response);
      setLoading(false);
    });

    return () => {
      setPokemons([]);
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    getPokemonByName(name).then((response) => {
      setPokemon(response);
      setLoading(false);
    });

    return () => {
      setPokemon([]);
      setLoading(false);
    };
  }, [name]);

  return (
    <section className="section">
      <div className="container is-max-widescreen">
        <div className="column is-half is-offset-one-quarter">
          <NavBar name={name} handleInputChange={handleInputChange} />
          {loading && "Loading"}

          {pokemon?.name ? (
            <PokeCard name={name} />
          ) : (
            pokemons.map((pokemon, index) => {
              return <PokeCard key={index} name={pokemon.name} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
