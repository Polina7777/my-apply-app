import React from 'react';
import { FooterProps } from './Footer-interface';
import './Footer.css';

class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <footer className="footer">
        {<span className="footer_text"> React.Component by Polina7777</span>}
      </footer>
    );
  }
}
export default Footer;
