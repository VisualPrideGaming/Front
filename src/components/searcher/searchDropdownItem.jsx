import React from 'react';
import { NavDropdown } from 'react-bootstrap';

export default function SearchDropdownItem({ result }) {
  return (
    <NavDropdown.Item  className='Item' href={`/videogame/${result.id}-${result.slug}`}>
        <li key={result.id + 'li'}>
          {result.background_image ? (
            <img
              width='45'
              height='45'
              alt={result.name}
              key={result.id + 'img'}
              src={
                result.background_image.match(/media\/screenshots/)
                  ? result.background_image.replace('media/screenshots', 'media/resize/80/-/screenshots')
                  : result.background_image.replace('media/games', 'media/resize/80/-/games')
              }
            />
          ) : (
            <svg width='45' height='45'>
              <circle cx='45' cy='45' r='45' fill='#D5D8DC' />
              Sorry, your browser does not support inline SVG.
            </svg>
          )}
          <span key={result.id + 'span'}>
            {result.released && result.name.includes(result.released.match(/[0-9]{4}/))
              ? result.name.replace(/\([0-9]{4}\)/, '').trim()
              : result.name.substring(0, 20) + '...'}{' '}
            ({result.released ? result.released.match(/[0-9]{4}/) : 'n/a'})
          </span>
        </li>
    </NavDropdown.Item>
  );
}

export function SearchDropdownItemNoResult() {
    return (
      <NavDropdown.Item>
      <li>
        <span>Sin coincidencias...</span>
      </li>
      </NavDropdown.Item>
    );
  }