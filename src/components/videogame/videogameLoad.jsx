import React, { Fragment } from 'react';
import { Spinner } from 'react-bootstrap';

export default function VideogameLoad() {
  return (
    <Fragment>
      <div className='container'>
        <div className='row text-white bg-dark img-background details-background'>
          <div className='col my-3'>
            <h3 className='bg-secondary loading-game p-4 text-center'>
              Cargando juego... <Spinner animation="border" />
            </h3>
            <p className='col-10 mb-2 text-secondary bg-secondary'>&zwnj;</p>
            <p className='col-4 mb-2 text-secondary bg-secondary'>&zwnj;</p>
            <p className='col-6 mb-2 text-secondary bg-secondary'>&zwnj;</p>
            <p className='col-10 mb-2 text-secondary bg-secondary'>&zwnj;</p>
            <p className='col-4 mb-2 text-secondary bg-secondary'>&zwnj;</p>
            <p className='col-6 mb-2 text-secondary bg-secondary'>&zwnj;</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
