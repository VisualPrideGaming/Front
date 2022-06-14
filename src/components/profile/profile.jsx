import React, { useState, useEffect, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Data, Reviews} from "./userData";
import ProfileLoad from "./profileLoad";
import { Card, Accordion } from "react-bootstrap";

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
            {data?.slice(0,1).map(users => 
                dataIsReady ? (
                  <div>
                    <Card key={users.id}>
                        <Card.ImgOverlay>
                            <Card.Body>
                            <Card.Title>Nombre: {users.nickname}</Card.Title>
                            <Card.Text>
                                Rol: {users.rol}
                            </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Accordion title="Juegos" id="nav-dropdown">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Juegos</Accordion.Header>
                        <Accordion.Body>
                          <Data id={users.id} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Reviews</Accordion.Header>
                        <Accordion.Body>
                          <Reviews id={users.id}/>
                        </Accordion.Body>
                      </Accordion.Item>  
                    </Accordion>
                  </div>  
                ) : (
                    <ProfileLoad key={users.id}/>
                ))}
        </div>
    );
};

export default Profile;
