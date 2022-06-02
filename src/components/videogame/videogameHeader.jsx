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

  function PlatformBadge({ data }) {
    const platformElement = data;
    return <div className='badge badge-warning platform-badge-margin'>{platformElement.platform.name}</div>;
  }

  function Tag({ data }) {
    const tag = data;
    return <div className='badge badge-dark tag-badge-margin'>{tag.language === 'eng' ? tag.name : null}</div>;
  }

  return (
    <header id='videogameHeader' border-bottom='1px' solid='#000'>
      <h2>
        {getTitle()}
        <span className='lead heading-line'> Lanzamiento: {getReleaseYear()} </span>
      </h2>
      {data.platforms.map((platformBadge, i) => (
        <PlatformBadge key={i} data={platformBadge} />
      ))}
      {data.tags.length < 1 ? (
        <section>
          {' '}
        </section>
      ) : (
        <section id='tags' className='my-2'>
          {data.tags.map((tag, i) => (
            <Tag key={i} data={tag} />
          ))}
        </section>
      )}
    </header>
  );
}
