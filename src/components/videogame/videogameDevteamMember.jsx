import React, { Fragment } from 'react';

export default function DevteamMember({ data }) {
  return (
    <Fragment>
      <li className='col media my-3'>
        {data.image ? (
          <img
            className='mr-3 rounded-circle dev-avatar-style'
            alt={data.name}
            src={
              data.image.match(/media\/persons_wiki/)
                ? data.image.replace('media/persons_wiki', 'media/resize/200/-/persons_wiki')
                : data.image.replace('media/persons', 'media/resize/200/-/persons')
            }
          />
        ) : (
          <div className='mr-3'>
            <svg width='90' height='90'>
              <circle cx='45' cy='45' r='45' fill='#6c757d' />
              Tu buscador no soporta SVG.
            </svg>{' '}
          </div>
        )}
        <div className='media-body'>
          <h5 className='mt-0 mb-1'>{data.name}</h5>
          {data.positions.map((position, i) => (
            <span key={i}>{`${i ? ', ' : ''} ${position.name}`}</span>
          ))}
        </div>
      </li>
    </Fragment>
  );
}