import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h3 className="title">FLY WORLD</h3>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#help">Help</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
