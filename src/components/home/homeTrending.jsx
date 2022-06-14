import React, { useState, useEffect, useCallback } from 'react';

import { Card } from "react-bootstrap";

export default function Trending({ data, value }) {
  /*const [setDetailsData] = useState(null);

  const getRawgApi = useCallback(async () => {
    
    try {
      //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
      const response = await fetch(`http://localhost:3003/games?game=${data[value].id}` , {
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

*/

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

  const getRating = () => {
    const rating = data[value].rating;
    return rating;
  };

  const getRank = () => {
    const rank = value + 1;
    return rank;
  };

  const selectedVideogameFn = () => {
    const videogame = `/videogame/${data[value].id}`;
    return videogame;
  };

  return (
      <a href={selectedVideogameFn()} className="link-margin" >
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
          </Card.ImgOverlay>
        </Card>
      </a>
  );
}