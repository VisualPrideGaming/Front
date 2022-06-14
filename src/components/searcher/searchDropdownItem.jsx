import React from 'react';
import { NavDropdown } from 'react-bootstrap';

export default function SearchDropdownItem({ result }) {
  return (
    <NavDropdown.Item  className='Item' href={`/videogame/${result.id}`}>
        <li key={result.id + 'li'}>
          <span key={result.id + 'span'}>
            {result.released && result.name.includes(result.released.match(/[0-9]{4}/))
              ? result.name.replace(/\([0-9]{4}\)/, '').trim()
              : result.name.substring(0, 40) }{' '}
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