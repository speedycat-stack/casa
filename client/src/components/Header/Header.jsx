import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = ({
  bgImage,
  variant = 'light',
  showHero = true,
  customTitle = 'WE MAKE A BIG CHANGE',
}) => {
  const headerStyle = bgImage
    ? { backgroundImage: `url(${bgImage})` }
    : {};

  return (
    <header className={`header header-${variant}`} style={headerStyle}>
      <Navbar variant={variant} />
      {showHero && (
        <div className="hero">
          <h1 className="hero-title">{customTitle}</h1>
          {customTitle === 'WE MAKE A BIG CHANGE' && (
            <>
              <p className="hero-text">
                Join us in making a big change for the homeless and shaping a brighter future together
              </p>
              <button className="donate-btn">MAKE A DONATION</button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
