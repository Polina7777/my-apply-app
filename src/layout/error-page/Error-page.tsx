import React from 'react';
import './Error-page.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-page">
        <h1 className="error_title">Oops!</h1>
        <p className="error_text">Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
}
export default ErrorPage;
