import axios from "axios";

export const getAllPokemon = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    console.log(`response`, response);
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getPokemonByName = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
