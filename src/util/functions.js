export const types = {
  bug: "is-bug",
  dark: "is-dark",
  drake: "is-drake",
  electric: "is-electric",
  fairy: "is-fairy",
  fighting: "is-fight",
  fire: "is-fire",
  fly: "is-fly",
  ghost: "is-ghost",
  grass: "is-grass",
  ground: "is-ground",
  ice: "is-ice",
  normal: "is-normal",
  poison: "is-poison",
  psychic: "is-psychic",
  rock: "is-rock",
  steel: "is-steel",
  water: "is-water",
};

export const getTypeClass = (type) =>
  Object.keys(types).includes(type) ? types[type] : "";
