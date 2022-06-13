import React, { useState, useEffect, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Data, Reviews} from "./userData";
import ProfileLoad from "./profileLoad";
import { Card } from "react-bootstrap";

const Profile = () => {

    const [data, setData] = useState(null);
    const [dataIsReady, setDataIsReady] = useState(false);

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

    return (
        <div className="Profile">
            {data?.map(users => 
                dataIsReady ? (
                    <Card>
                        <Card.Img src={users.image} className="Card-Img"/>
                        <Card.ImgOverlay>
                            <Card.Body>
                            <Card.Title>Nombre: {users.nickname}</Card.Title>
                            <Card.Text>
                                Rol: {users.rol}
                                Juegos: <Data id={users.id} />
                                Reviews: <Reviews id={users.id}/>
                            </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                ) : (
                    <ProfileLoad key={users.id}/>
                ))}
        </div>
    );
};

export default Profile;
