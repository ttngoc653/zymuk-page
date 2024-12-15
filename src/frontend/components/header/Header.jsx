import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="bi bi-list">Zimuk</i>
        <span>Tran</span>
      </Link>
      <nav className="navbar">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/tools" className="active">
          Tools
        </Link>
      </nav>
    </header>
  );
}

export default Header;
