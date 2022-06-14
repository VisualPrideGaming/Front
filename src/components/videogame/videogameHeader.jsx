import React from 'react';

export default function HeaderOnVideogames({ data }) {
  const getReleaseYear = () => {
    try {
      return data.released ? data.released.match(/[0-9]{4}/) : 'n/a';
    } catch (e) {
      console.error(e);
    }
  };

  const getTitle = () => {
    try {
      let title;
      data.released && data.name.includes(data.released.match(/[0-9]{4}/))
        ? (title = data.name.replace(/\([0-9]{4}\)/, '').trim())
        : (title = data.name);
      return title;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header id='videogameHeader' border-bottom='1px' solid='#000'>
      <h2>
        {getTitle()}
        <span className='lead heading-line'> Lanzamiento: {getReleaseYear()} </span>
      </h2>
    </header>
  );
}
