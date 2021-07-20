import React from 'react';
import './pokedexCover.css';

type PokedexCoverProps = {
  isOpen: boolean;
  onOpen: () => void;
};

export const PokedexCover = ({ isOpen, onOpen }: PokedexCoverProps) => {
  
  return (
    <div id="cover" className={`page odd ${isOpen ? "turn" : ''}`}>
      <div className="block"></div>
      <div className="container">
        <span className="arrow-right" onClick={onOpen}></span>
        <span className="bar-bottom"></span>
      </div>
    </div>
  );
}
