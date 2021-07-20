import React, { useState } from 'react';
import './App.css';
import { PokedexCover } from './components/pokedexCover/pokedexCover';

function App() {
  const [isPokedexOpen, setPokedexOpen] = useState(false);

  const handleToggle = () => {
    setPokedexOpen(!isPokedexOpen);
  }
  
  return (
    <div id="pokedex">
      <PokedexCover isOpen={isPokedexOpen} onOpen={handleToggle} />
      <div id="right-container" className={`page even cover_back11 ${isPokedexOpen ? "turn" : null}`}>
        
          <div className="teste"></div>
          <div className="corpo">
              <div className="top-screen-container">
                <div id="about-screen" className="right-panel-screen">
                  Height: 70cm Weight: 6.9kg
                </div>
              </div>
              <div className="square-buttons-container">
                <div className="blue-squares-container">
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                  <div className="blue-square"></div>
                </div>
              </div>
              <div className="center-buttons-container">
                <div className="center-left-container">
                  <div className="small-reds-container">
                    <div className="small-light red">
                      <div className="dot light-red"></div>
                    </div>
                    <div className="small-light red">
                      <div className="dot light-red"></div>
                    </div>
                  </div>
                  <div className="white-squares-container">
                    <div className="white-square"></div>
                    <div className="white-square"></div>
                  </div>
                </div>
                <div className="center-right-container">
                  <div className="thin-buttons-container">
                    <div className="thin-button"></div>
                    <div className="thin-button"></div>
                  </div>
                  <div className="yellow-button yellow">
                    <div className="big-dot light-yellow"></div>
                  </div>
                </div>
              </div>
              <div className="bottom-screens-container">
                <div id="type-screen" className="right-panel-screen">grass</div>
                <div id="id-screen" className="right-panel-screen">#1</div>
              </div>
          </div>
      </div>
      <div id="left-container" className="page content">
        <div className="left-top-container">
          <svg height="100" width="339" className="left-svg">
            <polyline points="0,95 100,95 119,50 339,50" style={{fill: 'none', stroke: 'black', strokeWidth: 3}}></polyline>
          </svg>
          <div className="lights-container">
            <div className="big-light-boarder">
              <div className="big-light blue">
                <div className="big-dot light-blue"></div>
              </div>
            </div>
            <div className="small-lights-container">
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
              <div className="small-light yellow">
                <div className="dot light-yellow"></div>
              </div>
              <div className="small-light green">
                <div className="dot light-green"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="screen">
            <div className="top-screen-lights">
              <div className="mini-light red"></div>
              <div className="mini-light red"></div>
            </div>
            <div id="main-screen"></div>
            <div className="bottom-screen-lights">
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
              <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <div className="upper-buttons-container">
            <div className="big-button"></div>
            <div className="long-buttons-container">
              <div className="long-button red"></div>
              <div className="long-button light-blue"></div>
            </div>
          </div>
          <div className="nav-buttons-container">
            <div className="dots-container">
              <div>.</div>
              <div>.</div>
            </div>
            <div className="green-screen">
              <span id="name-screen">bulbasaur</span>
            </div>
            <div className="right-nav-container">
              <div className="nav-button">
                <div className="nav-center-circle"></div>
                <div className="nav-button-vertical"></div>
                <div className="nav-button-horizontal">
                  <div className="border-top"></div>
                  <div className="border-bottom"></div>
                </div>
              </div>
              <div className="bottom-right-nav-container">
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
                <div className="dots-container">
                  <div className="black-dot">.</div>
                  <div className="black-dot">.</div>
                  <div className="black-dot">.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
