import './App.css';
import logo from './assets/uLogoWhite.png';
import uche from './assets/uche.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className='navOne'>
        <img src={logo} alt="Uchenna.io logo"/>
        <ul>
          <li><a href={"#About"}>01<span> About</span> </a></li>
          <li><a href={"#Projects"}> 02<span> Projects</span> </a></li>
          <li><a href={"#Contact"}> 03<span> Contact</span> </a></li>
        </ul>
      </nav>



<div className="navbar bg-base-100" id="navTwo">
<img src={logo} alt="Uchenna.io logo"/>
  <div className="navbar-end">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-10">
        <li><a href={"#About"}>01 About</a></li>
        <li><a href={"#Projects"}>02 Projects</a></li>
        <li><a href={"#Contact"}>03 Contact</a></li>
      </ul>
    </div>
  </div>
</div>


      <main>
        <h1>Full-Stack Web Developer & Creator</h1>
        <p> I code and create beautiful, minimalist digital experiences.</p>
        <img src={uche} alt="pic of Uchenna"/>
      </main>



      
      
</div>
  );
}

export default App;
