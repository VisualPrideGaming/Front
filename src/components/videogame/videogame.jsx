import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import VideogameLoad from './videogameLoad';
import Overview from './videogameOverview.jsx';
import SimilarVideogames from './videogameSimilarVideogames';
import HeaderOnVideogames from './videogameHeader';
import Screenshots from './videogameScreenshots';
import Reviews from './videogameReviews';

//  MODIFICAR CON LOS DATOS NUEVOS

export default function Videogame() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [dataIsReady, setDataIsReady] = useState(false);

  const getRawgApi = useCallback(async () => {
    // Se recoge el :id de la dirección para hacer la busqueda
    // en la api con ese id
    try {
      const response = await fetch(`/api/videogame/${id}`);
      const json = await response.json();
      setData(json);
      setDataIsReady(true);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    getRawgApi();
  }, [getRawgApi]);

  const getArchiveApi = useCallback(async () => {
    const getTitleValue = () => {
      let titleValue;
      data.released && data.name.includes(data.released.match(/[0-9]{4}/))
        ? (titleValue = data.name.replace(/\([0-9]{4}\)|:.*|-|\./, '').trim())
        : (titleValue = data.name.replace(/:.*|-|\./, ''));
      return titleValue;
    };
  }, [data, dataIsReady]);

  useEffect(() => {
    getArchiveApi();
  }, [getArchiveApi]);

  return (
    <Fragment>
      {dataIsReady ? (
        <main className='container'>
          <HeaderOnVideogames data={data}>{(document.title = `${data.name}`)}</HeaderOnVideogames>
          <Overview data={data} />
          <section id='storesAndReviews' className='row'>   
            <Reviews data={data} />
          </section>
          <section id='misc' className='row'>
            <Screenshots data={data} />
          </section>
          <SimilarVideogames data={data} />
        </main>
      ) : (
        <VideogameLoad>{(document.title = 'Cargando juego...')}</VideogameLoad>
      )}
    </Fragment>
  );
}
