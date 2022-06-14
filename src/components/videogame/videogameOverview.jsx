import React from 'react';

export default function Overview({ data }) {
  const getBackground = () => {
    try {
      let background;
      data.background_image_additional ? (background = data.background_image_additional) : (background = data.background_image);

      if (background) {
        background.match(/media\/screenshots/)
          ? (background = background.replace('media/screenshots', 'media/crop/600/400/screenshots'))
          : (background = background.replace('media/games', 'media/crop/600/400/games'));
      }
      return background;
    } catch (e) {
      console.error(e);
    }
  };

  const getVotes = () => {
    try {
      return data.rating;
    } catch (e) {
      console.error(e);
    }
  };

  const getReleaseDate = () => {
    try {
      return data.released;
    } catch (e) {
      console.error(e);
    }
  };

  const bgImage = getBackground()
    ? 'linear-gradient(rgba(0,0,0,.9), rgba(52,58,64,.9)), url(' + getBackground() + ')'
    : 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)';

  function Genre({ data, index }) {
    const genreElement = data;
    const i = index;
    return <span key={i}>{`${i ? ', ' : ''} ${genreElement}`}</span>;
  }

  return (
    <section
      id='videogameSummary'
      className='row text-black img-background details-background'
      style={{ backgroundImage: bgImage }}>
      <summary className='col-md-12 my-12' style={{ cursor: 'default' }}>
        <img src={data.image} alt='poster' className='img-style' />
        <div className='my-12'>
          <h4>Información:</h4>
          <ul className='list-unstyled'>
            <li>
              <strong>Género:</strong>{' '}
              {data.genres?.map((genreElement, i) => (
                <Genre key={i} data={genreElement} />
              ))}
            </li>
            <li>
              <strong>Lanzamiento:</strong> {getReleaseDate()}
            </li>
            <li>
              <strong>Valoración:</strong> ★{getVotes()}/5
            </li>
          </ul>
        </div>
      </summary>
    </section>
  );
}