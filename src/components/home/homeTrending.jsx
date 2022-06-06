import React, { useState, useEffect, useCallback } from 'react';

import { Card } from "react-bootstrap";

export default function Trending({ data, value }) {
  const [detailsData, setDetailsData] = useState(null);

  const getRawgApi = useCallback(async () => {
    
    try {
      //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
      const response = await fetch(`http://localhost:3003/games/${data[value].id}` , {
        headers: new Headers({
          'Authorization': 'Bearer julenverne'
      }), 
      });
      const json = await response.json();
      setDetailsData(json);
    } catch (e) {
      console.error(e);
    }
  }, [data, value]);

  useEffect(() => {
    getRawgApi();
  }, [getRawgApi]);

  // CREANDO VARIABLES CON LOS DATOS RECOGIDOS

  const getPoster = () => {
    const posterPath = data[value].image;
    const poster = posterPath.match(/media\/screenshots/)
      ? posterPath.replace('media/screenshots', 'media/resize/420/-/screenshots')
      : posterPath.replace('/media/games/', '/media/resize/420/-/games/');
    return poster;
  };

  const getTitle = () => {
    let title;
    data[value].released && data[value].name.includes(data[value].released.match(/[0-9]{4}/))
      ? (title = data[value].name.replace(/\([0-9]{4}\)/, '').trim())
      : (title = data[value].name);
    return title;
  };

  const getOverview = () => {
    const overview = data[value].name;
    return overview;
  };

  const getPlatform = () => {
    const platformArray = data[value].platforms;
    const platform = platformArray.map((platformElement, index) => (
      <div className='badge badge-dark platform-badge-margin' key={index + 1}>
        {platformElement.platform}
      </div>
    ));
    return platform;
  };

  const getRating = () => {
    const rating = data[value].rating;
    return rating;
  };

  const getRank = () => {
    const rank = value + 1;
    return rank;
  };

  const selectedVideogameFn = () => {
    const videogame = `/videogame/${data[value].id}-${data[value].name}`;
    return videogame;
  };

  return (
      <a href={selectedVideogameFn()} className="link-margin">
        <Card className='Card-Content'>
          <Card.Img src={getPoster()} className="Card-Img"/>
          <Card.ImgOverlay>
          <Card.Title className='position-absolute mt-4'>★{getRating()}/5</Card.Title>
            <Card.Text>
              #<strong>{getRank()}</strong>
            </Card.Text>
            <Card.Text>
              {getTitle().length >= 30 ? getTitle().substring(0, 30) + '...' : getTitle().substring(0, 30)}
            </Card.Text>
            <Card.Text>{data[value].platforms ? getPlatform() : null}</Card.Text>
            <Card.Text>
              {data[value].name ? (
                <Card.Text>{getOverview().substring(0, 110) + '...'}</Card.Text>
              ) : (
                <Card.Text>
                  <p className='w-100 mb-2 text-secondary bg-secondary'>&zwnj;</p>
                  <p className='w-50 mb-2 text-secondary bg-secondary'>&zwnj;</p>
                  <p className='w-75 mb-2 text-secondary bg-secondary'>&zwnj;</p>
                  <p className='w-100 mb-2 text-secondary bg-secondary'>&zwnj;</p>
                  <p className='w-50 mb-2 text-secondary bg-secondary'>&zwnj;</p>
                </Card.Text>
              )}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </a>
  );
}