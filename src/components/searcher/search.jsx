import React, { useState, useEffect, Fragment } from 'react';
import SearchDropdownItem, { SearchDropdownItemNoResult } from './searchDropdownItem';
import { NavDropdown } from 'react-bootstrap';

export default function Search() {
  const [data, setData] = useState(null);
  const [dataIsReady, setDataIsReady] = useState(false);
  const [dropdownIsopened, setDropdownIsopened] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    async function getRawgApi() {
      if (keyword !== '') {
        // Recoge una cantidad de juegos que mantengan lo escrito por pantalla.
        try {
          const response = await fetch(`http://localhost:3003/games/filter?search=${keyword.toLowerCase()}` 
          , {
            headers: new Headers({
              'Authorization': 'Bearer julenverne'
          }), 
          });
          const json = await response.json();
          setData(json);
          setDataIsReady(true);
        } catch (e) {
          console.error(e);
        }
      }
    }
    getRawgApi();
  }, [keyword]);

  const setKeywordInInput = event => {
    setKeyword(event.target.value);
    setDropdownIsopened(true);
  };

  const closeDropdown = () => {
    setDropdownIsopened(false);
    setKeyword('');
  };

  return (
    <Fragment>
      <div>
        <input
          id='searchform'
          className='form-control mt-2'
          type='text'
          placeholder='¿Que juego vas a buscar?…'
          autoComplete='off'
          value={keyword}
          onChange={setKeywordInInput}
        />
        {dataIsReady ? (
          <NavDropdown title="Resultados">
            {dropdownIsopened ? (
              <div className='w-auto text-dark position-absolute dropdown-position py-2 px-2'>
                <ul className='list-unstyled mb-0'>
                  {/*Se muestran 8 resultados mapeados la clase SearchDropdown y en caso de no haber coincidecias se devuelve el ItemNoResult */
                    data.length ? (
                    data.slice(0, 8).map(result => <SearchDropdownItem key={result.id} result={result} />)
                  ) : (
                    <SearchDropdownItemNoResult />
                  )}
                </ul>
                <div id='dropdownOverlay' onClick={closeDropdown} className='overlay-style'></div>
              </div>
            ) : null}
          </NavDropdown>
        ) : null}
      </div>
    </Fragment>
  );
}
