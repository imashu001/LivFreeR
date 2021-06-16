import { useState , useEffect, useRef} from 'react';
import { Link } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
  const [navBarStatus, setNavBarStatus] = useState("")
  const outsideRef = useRef(null)
  function handleClick(){
    setNavBarStatus('')
    const url = 'https://www.indiamart.com/pranitradingco/';
    window.open(url, '_blank');
  }

  useEffect(() => {
    function handleClickOutside(event) {
      console.log("runnig")
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setNavBarStatus('')
      console.log("mmmmmmmmrunnig")

      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [outsideRef])
  return(
    <div className='navbar-main-component' ref={outsideRef}>
      <div className="LogoWrapper">
        <div className="logo">Logo</div>
      <div className={`hamburger  ${navBarStatus}`} onClick={() => {
        setNavBarStatus(navBarStatus ? '' :"active")
      }}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
      </div>
      <div className={`nav-link-wrapper ${navBarStatus}`} >
        <div className="nav-item">
        <Link  className="nav-link" onClick={()=>{setNavBarStatus('')}} to='/'>Home</Link>
        </div>
        <div className="nav-item">
        <Link className="nav-link"  onClick={()=>{setNavBarStatus('')}} to='/products'>Products</Link>
        </div>
        <div className="nav-item">
        <Link  className="nav-link"  onClick={()=>{setNavBarStatus('')}} to='/sustainibility'>Sustainibility</Link>
        </div>
        <div className="nav-item" onClick={handleClick}>
        <p className="nav-link">Buy</p>
        </div>
      </div>
    </div>
  )

}

export default Navbar

{/* <div><Link to='/'><h1>Home </h1></Link></div>
<div><Link to='/about'><h1>Products </h1></Link></div>
<div><Link to='/sustainibility'><h1>Sustainibility </h1></Link></div>
<div onClick={handleClick}><h1>Buy</h1></div> */}