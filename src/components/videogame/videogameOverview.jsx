import React, { Fragment } from 'react';
import dompurify from 'dompurify';
import DevteamMember from './videogameDevteamMember';

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

  const getPoster = () => {
    try {
      let poster = data.image;
      if (data.image) {
        data.image.match(/media\/screenshots/)
          ? (poster = data.image.replace('media/screenshots', 'media/crop/600/400/screenshots'))
          : (poster = data.image.replace('media/games', 'media/crop/600/400/games'));
      }
      return poster;
    } catch (e) {
      console.error(e);
    }
  };

  const getWebsite = () => {
    try {
      const website = data.website;
      const websiteText = website.replace(/http:\/\/|https:\/\/|www\./g, '');
      return { website, websiteText };
    } catch (e) {
      console.error(e);
    }
  };

  const getOverview = () => {
    try {
      return data.description;
    } catch (e) {
      console.error(e);
    }
  };

  const getPlaytime = () => {
    try {
      return data.playtime;
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

  function Company({ data, index }) {
    const companyElement = data;
    const i = index;
    return <span>{`${i ? ', ' : ''} ${companyElement.name}`}</span>;
  }

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
      <summary className='col-md-3 my-3' style={{ cursor: 'default' }}>
        <img src={data.image} alt='poster' className='img-style' />
        <div className='my-3'>
          <h4>Información:</h4>
          <ul className='list-unstyled'>
            <li>
              {/* <strong>Desarroladora:</strong>{' '}
              {data.developers.map((companyElement, i) => (
                <Company key={companyElement.id} data={companyElement} index={i} />
              ))} */}
            </li>
            <li>
              {/* <strong>Duración:</strong> {getPlaytime() && getPlaytime() !== 0 ? getPlaytime() + ' hours' : '-'} */}
            </li>
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
            {/* {getWebsite().website ? (
              <Fragment>
                <li>
                  <strong>Web:</strong>{' '}
                  <a href={getWebsite().website} target='_blank' rel='noopener noreferrer' className='text-secondary'>
                    {getWebsite().websiteText.length >= 25
                      ? getWebsite().websiteText.substring(0, 25) + '...'
                      : getWebsite().websiteText}
                  </a>
                </li>
              </Fragment>
            ) : null} */}
          </ul>
        </div>
      </summary>
      <article id='overview' className='col my-3'>
        <div>
          <h4>Descripción:</h4>
          <p className='mb-2' dangerouslySetInnerHTML={{ __html: dompurify.sanitize(getOverview()) }}></p>
        </div>
        <div>
          {/* {data.devteam.length > 0 ? (
            <Fragment>
              <h4>Creadores:</h4>
              <ul className='row list-unstyled list-group list-group-horizontal'>
               {data.devteam.map(devteamMember => (
                  <DevteamMember key={devteamMember.id} data={devteamMember} />
                ))} 
              </ul>
            </Fragment>
          ) : null} */}
        </div>
      </article>
    </section>
  );
}