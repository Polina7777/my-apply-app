import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from './Header-interface';
import './Header.css';

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        {
          <div className="header_text">
            {/* <h2 className="header_title">Book</h2> */}
            <div className="links">
              <Link aria-label="Link" to="" className="book">
                Book
              </Link>
              <Link aria-label="Link" to="about-us" className="about-us">
                About Us
              </Link>
              <Link aria-label="Link-to-form" to="form-page" className="form-page_link">
                Registration form
              </Link>
              <Link aria-label="Link-to-form" to="api-page" className="api-page_link">
                Api
              </Link>
            </div>
          </div>
        }
      </header>
    );
  }
}
export default Header;
