import logo from '../assets/logo-dimo.png';


export const Header = () => {
    return(
    <>
    <ul className="header">
    <li><a href="/"><img src={logo} className="App-logo" alt="logo" /></a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/login">Login</a></li>
    <li><a href="/logout">Logout</a></li>
  </ul>
   <div className="header_bottom"></div>  
   </>
    )
}