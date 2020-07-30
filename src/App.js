import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dropDownVisible: false
    }
  }
  
  toggleDropDown = () => {
    this.setState( {
      dropDownVisible: !this.state.dropDownVisible
    } ) 
  }

  render() {

    return (
      <div className="app">
        <body>
          <main className="app-main"> 
              <header className="header">
                  <div className="title">
                    <a>Start Bootstrap</a>
                  </div>
                  <div className="nav-links-desktop">
                    <a>About</a>
                    <a>Projects</a>
                    <a>Contact</a>
                  </div>    
                  
                  <button className="dropdown dropdown-button" 
                    onClick={ this.toggleDropDown }>Menu</button>
                  {  this.state.dropDownVisible? (
                  <div className="dropdown dropdown-list">
                    <a className="dropdown dropdown-links" href="#">About</a>
                    <a className="dropdown dropdown-links" href="#">Projects</a>
                    <a className="dropdown dropdown-links" href="#">Contact</a>
                  </div>
                  ) : null }   
              </header>
              <section className="section section1">
                <div id="section1-content">
                  <h1 id="section1-title">GRAYSCALE</h1>
                  <p id="section1-p">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</p>
                  <button id="section1-button">GET STARTED</button>
                </div>
              </section>
              <section className="section section2">
                  <h1 id="section2-title">Build with Bootstrap 4</h1>
                  <p id="section2-p">Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href="https://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
              </section>
              <section className="section section3"></section>
              <section className="section section4"></section>
              
          </main>
        </body>
      </div>
    );
  }

}
export default App;
