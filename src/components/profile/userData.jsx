import React, {useCallback, useEffect, useState} from "react";
import { Card } from "react-bootstrap";

export function Data(id) {
    
    const [data, setData] = useState(null);
    const getRawgApi = useCallback(async () => {
        try {
          //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
          const response = await fetch(`localhost:3003/users/data?user=${id}` , {
            headers: new Headers({
              'Authorization': 'Bearer julenverne'
          }), 
          });
          const json = await response.json();
          setData(json);
        } catch (e) {
          console.error(e);
        }
      }, []);

      useEffect(() => {
        getRawgApi();
      }, [getRawgApi]);

    return (
        <div className="data">
            {data.map((game) => (
                <div>
                    <Card.Text>Juego: {game.game_name} </Card.Text>
                    <Card.Text>Estado: {game.status_game} </Card.Text>
                </ div>
            ))}
        </div>
    )
}

export function Reviews(id) {
    
    const [data, setData] = useState(null);
    const getRawgApi = useCallback(async () => {
        try {
          //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
          const response = await fetch(`localhost:3003/users/reviews?user=${id}` , {
            headers: new Headers({
              'Authorization': 'Bearer julenverne'
          }), 
          });
          const json = await response.json();
          setData(json);
        } catch (e) {
          console.error(e);
        }
      }, []);

      useEffect(() => {
        getRawgApi();
      }, [getRawgApi]);

      return(
          <div className="reviews">
            {data.map((game) => (
                <div>
                    <Card.Text>Juego: {game.game_name} </Card.Text>
                    <Card.Text>Review: {game.score}<br/>{game.review}</Card.Text>
                </ div>
            ))}
          </div>
      )

}