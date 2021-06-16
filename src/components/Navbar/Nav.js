import { Link } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
  function handleClick(){
    const url = 'https://www.indiamart.com/pranitradingco/';
    window.open(url, '_blank');
  }
  return(
    <div className='navbar-main-component'>
      <div><Link to='/'><h1>Home </h1></Link></div>
      <div><Link to='/about'><h1>Products </h1></Link></div>
      <div><Link to='/sustainibility'><h1>Sustainibility </h1></Link></div>
     <div onClick={handleClick}><h1>Buy</h1></div>
    </div>
  )

}

export default Navbar