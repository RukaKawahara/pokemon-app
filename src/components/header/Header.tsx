import './header.css';
import pokemonBall from '../../img/pokemonBall.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={pokemonBall} alt="モンスターボール" className='header-img' />
      <h1 className='header-h1'>ポケモン図鑑</h1>
      <img src={pokemonBall} alt="モンスターボール" className='header-img' />
    </header>
  )
}

export default Header