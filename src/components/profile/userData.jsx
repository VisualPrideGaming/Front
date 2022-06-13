import React, {useCallback, useEffect, useState} from "react";
import { Card } from "react-bootstrap";

export function Data(id) {
    
    const [data, setData] = useState(null);
    const getRawgApi = useCallback(async () => {
        try {
          //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
          const response = await fetch(`http://localhost:3003/users/data?user=${id.id}` , {
            headers: new Headers({
              Authorization: `Bearer julenverne`
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
                
                  <Card key={`${game.id}-comprado`}>
                    <Card.Text>Juego: {game.game_name} </Card.Text>
                    <Card.Text>Comprado</Card.Text>
                  </Card>
                
            ))}
        </div>


        <div className="data">
            {data?.deseados?.map((game) => (
              
                <Card key={`${game.id}-deseado`}>  
                    <Card.Text>Juego: {game.game_name} </Card.Text>
                    <Card.Text>Deseado</Card.Text>
                </Card>
              
            ))}
        </div>

        <div className="data">
            {data?.pasados?.map((game) => (
             
                <Card key={`${game.id}-pasado`}>
                    <Card.Text>Juego: {game.game_name} </Card.Text>
                    <Card.Text>Pasado</Card.Text>
                </Card>  
               
            ))}
        </div>

        <div className="data">
            {data?.favoritos?.map((game) => (
              
                <Card key={`${game.id}-favorito`}>
                  
                    <Card.Text>Juego: {game.game_name} </Card.Text>
                    <Card.Text>Favorito</Card.Text>
                </Card>
              
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
              Authorization: 'Bearer julenverne'
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
                
                  <Card key={`${game.id}-reviews`}>
                    <Card.Text>Juego: {game.game_name} </Card.Text>
                    <Card.Text>Puntuación: {game.score}<br/>{game.review}</Card.Text>
                  </Card>
            
            ))}
          </div>
      )

}