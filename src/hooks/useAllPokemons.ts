import axios from 'axios';
import { useState } from 'react'
import { Pokemon } from '../types/pokemon';

const useAllPokemons = () => {
  const [count, setCount] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);
  const [PokemonData, setPokemonData] = useState<Pokemon[]>([]);

  const getPokemonData = async(url:string) => {
    const res = await axios.get(url);
    return res;
  };

  const loadPokemonData = async(results:any) => {
    let pokemonData = await Promise.all(
      results.map(async(pokemon:any) => {
        // ポケモンの情報を取得
        let pokemonRecord = await getPokemonData(pokemon.url);

        // typeのみ日本語と合わせてtype名のみ取得するので、個別でデータをとる
        let englishTypes = pokemonRecord.data.types.map((type:any) => {
          return type.type.name;
        })

        // 英語で取得されるので日本語に翻訳
        let pokemonJapaneseName = await translateJapaneseName(pokemonRecord);

        return {
          id: pokemonRecord.data.id,
          image: pokemonRecord.data.sprites.front_default,
          name: pokemonJapaneseName.name,
          types: {
            jp: pokemonJapaneseName.types,
            en: englishTypes
          },
          weight: pokemonRecord.data.weight / 10,
          height: pokemonRecord.data.height / 10,
          abilities: pokemonJapaneseName.abilities,
        };
      })
    );

    setPokemonData(pokemonData);
  };

  const translateJapaneseName = async(pokemonRecord:any) => {
    // ポケモンタイプ 日本語名取得
    let types = await Promise.all(
      pokemonRecord.data.types.map(async(type:any) => {
        let res = await getPokemonData(type.type.url);
        // todoでjaで検索できるようにしたい
        return res.data.names[0].name;
      })
    );
    // ポケモンアビリティ 日本語名取得
    let abilities = await Promise.all(
      pokemonRecord.data.abilities.map(async(ability:any) => {
        let res = await getPokemonData(ability.ability.url);
        return res.data.names[0].name;
      })
    );
    // ポケモン名前 日本語名取得
    let pokemonSpecies = await getPokemonData(pokemonRecord.data.species.url);
    let name = pokemonSpecies.data.names[0].name;

    return {types, abilities, name}
  }

  const loadNewPage = async(url:string) => {
    setLoading(true);
    const res = await getPokemonData(url);
    setCount(res.data.count);
    await loadPokemonData(res.data.results);
    setLoading(false);
  }

  return { loading, PokemonData, count, loadNewPage }
}

export default useAllPokemons;