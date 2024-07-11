export type Pokemon = {
  id: number;
  image: string | null;
  name: string;
  types: {
    jp: [string];
    en: [string];
  },
  weight: number;
  height: number;
  abilities: [
    ability: [string]
  ];
}

export type ButtonProps = {
  prevUrl: string | null | undefined;
  nextUrl: string | null | undefined;
  onClickPokemonData: Function;
}
