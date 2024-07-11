import './card.css';
import { Pokemon } from '../../types/pokemon';
import pokemonBall from '../../img/pokemonBall.png';
import noData from '../../img/noData.png';

type Props = {
  pokemon: Pokemon;
}

const Card = (props:Props) => {
  const {id, image, name, types, weight, height, abilities} = props.pokemon;

  return (
    <div className="card">
      <p className="card-id">
        No.{id}
      </p>
      <figure className="card-thumbnail">
        {
          image === null ?
            <>
              <img src={noData} className='card-image card-image--noData'/>
              <div>画像データがありません</div>
              <br />
            </>
          :
          <img src={image} className='card-image'/>
        }
      </figure>
      <div className="card-header">
        <h2 className="card-title">{name}</h2>
      </div>
      <div className="card-body">
        <p className="card-text card-text--type">
        <div className="card-text_title_wrapper">
          <img src={pokemonBall} alt="ポケモンボール" className="card-img" />タイプ
        </div>
        <ul>
        {
          types.jp.map((type, index) => {
            return(
              <>
                <li className={`card-type card-type--${types.en[index]} card-item`} key={index}>
                  {type}
                </li>
              </>
            )
          })
        }
        </ul>
        </p>
        <div className="card-text_title_wrapper">
          <p className="card-text">重さ: {weight}kg /</p>
          <p className="card-text">高さ: {height}m</p>
        </div>
        <div className="card-text_title_wrapper">
          <img src={pokemonBall} alt="ポケモンボール" className="card-img" />能力
        </div>
        <ul>
          {
            abilities.map((ability, index) => {
              return(
                <>
                  <li className='card-item' key={index}>{ability}</li>
                </>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Card