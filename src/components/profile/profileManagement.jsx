import React, { useState, useEffect, useCallback } from "react";
import {Data} from "./userData";
import 'bootstrap/dist/css/bootstrap.css';
import ProfileLoad from "./profileLoad";
import { Card } from "react-bootstrap";

const ProfileManagement = () => {

    const [data, setData] = useState(null);
    const [dataIsReady, setDataIsReady] = useState(false);
    const [usersCount] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 2 },
        { id: 4, value: 3 },
        { id: 5, value: 4 }
      ]);

    const getRawgApi = useCallback(async () => {
        try {
          //SE RECOGEN LOS DATOS DE LA DIRECCIÓN DE LA API
          const response = await fetch('http://localhost:3003/users' , {
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

      const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        
        fetch('http://localhost:5000/city/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
    }

    return (
        <div className="Profile">
            {usersCount.map(users => 
                dataIsReady ? (
                    <Card>
                        <Card.Img src={users.image_user} className="Card-Img"/>
                        <Card.ImgOverlay>
                            <Card.Body>
                            <Card.Title>Nombre: {users.nickname}</Card.Title>
                            <Card.Text>
                                <Data id={users.id}/>
                            </Card.Text>
                            {/* Aqui habría otro mapeo con cada review y cada juego con su estado
                            en el que se añaden los componentes forms para crear nuevos data y reviews y deletes, abajo
                            dejo comentado un ejemplo de delete*/}
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                ) : (
                    <ProfileLoad key={users.id}/>
                ))}
        </div>
    );
};

export default ProfileManagement;


/* EJEMPLO DELETE

El nuestro tiene dos parámetros, he echado un ojo a la documentación y videos que he visto
pero no he conseguido apañarmelas para los dos parametros
(userId y gameId)

const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        
        fetch('localhost:3003/users/reviews' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
    }

const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        
        fetch('localhost:3003/users/data' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
    }

*/