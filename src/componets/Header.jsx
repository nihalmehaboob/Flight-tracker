import '../styles/header.css';
import styled from 'styled-components';
import flightImage from '../assets/flight.png';

const AvatarImage = styled.img`
  width: 30px; /* Adjust size as needed */
  height: 30px;
  border-radius: 50%; /* Makes the image circular */
`;

const Header = () => {
  return (
    <header className="header">
    <AvatarImage  src={flightImage} alt="Flight Icon"/>
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
