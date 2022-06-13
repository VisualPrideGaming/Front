import React, {useCallback, useEffect, useState} from "react";
import { Card } from "react-bootstrap";

export function Data(id) {
    
    const [data, setData] = useState(null);
    const getRawgApi = useCallback(async () => {
        try {
          //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
          const response = await fetch(`http://localhost:3003/users/data?user=${id.id}` , {
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
      <div>
        <div className="data">
            {data?.comprado?.map((game) => (
                <div>
                    <Card.Text>Juego: {game.name} </Card.Text>
                    <Card.Text>Comprado</Card.Text>
                </ div>
            ))}
        </div>


        <div className="data">
            {data?.deseados?.map((game) => (
              <div>
                    <Card.Text>Juego: {game.name} </Card.Text>
                    <Card.Text>Deseado</Card.Text>
                </ div>
            ))}
        </div>

        <div className="data">
            {data?.pasados?.map((game) => (
              <div>
                    <Card.Text>Juego: {game.name} </Card.Text>
                    <Card.Text>Pasado</Card.Text>
                </ div>
            ))}
        </div>

        <div className="data">
            {data?.favoritos?.map((game) => (
              <div>
                    <Card.Text>Juego: {game.name} </Card.Text>
                    <Card.Text>Favorito</Card.Text>
                </ div>
            ))}
        </div>
      </div>
    )
}

export function Reviews(id) {
    
    const [data, setData] = useState(null);
    const getRawgApi = useCallback(async () => {
        try {
          //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
          const response = await fetch(`http://localhost:3003/users/reviews?user=${id.id}` , {
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
            {data?.reviews?.map((game) => (
                <div>
                    <Card.Text>Juego: {game.name} </Card.Text>
                    <Card.Text>Review: {game.score}<br/>{game.review}</Card.Text>
                </ div>
            ))}
          </div>
      )

}