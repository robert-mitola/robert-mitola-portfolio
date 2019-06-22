import React from 'react';
import './cover.css';

function App() {

  return(
      <div className="text-center cover-body">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">R.A.M.</h3>
              <nav className="nav nav-masthead justify-content-center">
                <span className="nav-link active">Home</span>
                <span className="nav-link">Paintings</span>
                <span className="nav-link">Prints</span>
                <span className="nav-link">Film</span>
                <span className="nav-link">Contact</span>
              </nav>
            </div>
          </header>

          <main role="main" className="inner cover">
            <h1 className="cover-heading">Rob Mitola</h1>
            <p className="lead">
              <i>All prints available for an affordable price of $5,001.37. Financing available for exceptional credit.</i>
            </p>
            <p className="lead">
              <span
                href="#"
                className="btn btn-lg btn-secondary"
              >
                View Art
              </span>
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Special thanks for <a href="https://getbootstrap.com/">Bootstrap</a> cover template by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            </div>
          </footer>
        </div>
      </div>
  );
}

export default App;
