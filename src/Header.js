import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import logo from './logo.png';
import text from './Writing.png';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return(
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
        <div className="header__search">
          <img className="header__text" src={text} alt="" />
        </div>

      <div className="header__nav">
      <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
          <PersonIcon/>
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}
export default Header;