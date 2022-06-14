import React, { useState, useEffect, useCallback } from "react";
import Trending from "./homeTrending";
import HomeLoad from "./homeLoad";


const Home = () => {
    const [key, setKey] = useState('top-rated');

    // SE RECOGEN LOS DATOS DE LA API PARA UTILIZARLOS

    // MODIFICAR DATOS CON LOS DE LA BBDD NUEVA
    const [data, setData] = useState(null);
    const [dataIsReady, setDataIsReady] = useState(false);
    const [topVideogameCount] = useState([
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 4 },
      { id: 6, value: 5 },
      { id: 7, value: 6 },
      { id: 8, value: 7 },
      { id: 9, value: 8 },
      { id: 10, value: 9 }
    ]);
  
    const getRawgApi = useCallback(async () => {
      try {
        //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
        const response = await fetch('http://localhost:3003/games/top' , {
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
    }, []);
  
    useEffect(() => {
      getRawgApi();
    }, [getRawgApi]);
    
    return (
      <div className="home">
        
            {topVideogameCount.map(videogames =>
              dataIsReady ? (
                <Trending key={videogames.id} value={videogames.value} data={data} />
              ) : (
                <HomeLoad key={videogames.id} />
              ) 
            )}
      </div>
    )
}

export default Home;