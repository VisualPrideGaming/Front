import React, { useState, useEffect, Fragment } from 'react';

export default function SimilarVideogames({ data }) {
  const [suggestedElements, setSuggestedElements] = useState(null);
  useEffect(() => {
    async function getRawgApi() {
      try {
        const response = await fetch(`/api/videogameAutocomplete?q=${data.name}`);
        const json = await response.json();
        setSuggestedElements(json);
      } catch (e) {
        console.error(e);
      }
    }
    getRawgApi();
  }, [data]);

  function Suggested({ data }) {
    const suggestedElement = data;
  
    function PlatformBadge({ data }) {
      const platformElement = data;
      return <div className='badge badge-warning platform-badge-margin'>{platformElement.platform.name}</div>;
    }
  
    return (
      <Fragment>
        {suggestedElement.background_image ? (
          <a
            href={`/videogame/${suggestedElement.id}-${suggestedElement.slug}`}
            className='col-5 m-2 p-4 text-decoration-none suggested-game-style'
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(52,58,64,.2)), url(${
                suggestedElement.background_image.match(/media\/screenshots/)
                  ? suggestedElement.background_image.replace('media/screenshots', 'media/crop/600/400/screenshots')
                  : suggestedElement.background_image.replace('media/games', 'media/crop/600/400/games')
              })`,
              backgroundSize: 'cover'
            }}>
            <h5 className='text-light suggestion-h2'>
              {suggestedElement.name.length >= 30 ? suggestedElement.name.substring(0, 30) + '...' : suggestedElement.name}
            </h5>
            <div>
              {suggestedElement.platforms
                ? suggestedElement.platforms.map((platformElement, i) => <PlatformBadge data={platformElement} key={i} />)
                : null}
            </div>
          </a>
        ) : null}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {suggestedElements ? (
        <aside id='similarVideogames'>
          <header className='row my-3 px-3'>
            <h4>Similares:</h4>
          </header>
          <section className='row mb-2 justify-content-center text-center'>
            {suggestedElements.results.slice(1).map(suggestedElement => (
              <Suggested key={suggestedElement.id} data={suggestedElement} />
            ))}
          </section>
        </aside>
      ) : null}
    </Fragment>
  );
}
