import React from "react";
import { CardGroup, Card } from "react-bootstrap"
import equipo from "../../images/equipo.jpg"
import gaming from "../../images/gaming.jpg"
import futuro from "../../images/futuro.jpg"

export default function Contact() {
    return(
        <div className="nosotros">
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={equipo}  height="auto"/>
                <Card.Body>
                    <Card.Title>¿Quienes somos?</Card.Title>
                    <Card.Text>
                      Somos un par de desarrolladores que nos encantan tanto los videojuegos 
                      que hemos querido almacenar todos los juegos que han salido en nuestra aplicación.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={gaming} height="auto"/>
                <Card.Body>
                    <Card.Title>¿Que hacemos?</Card.Title>
                    <Card.Text>
                      Nos encargamos de recopilar todos los datos e información de cada videojuego para
                      generar un entorno en el que podamos comentar y charlar de videojuegos entre todos lo gamers.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={futuro} height="auto"/>
                <Card.Body>
                    <Card.Title>Nuestro futuro</Card.Title>
                    <Card.Text>
                      Nos encantaría que en un futuro llegue a convertirse en la red social de gamers más importante 
                      al nivel de las redes sociales más reconocidas.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    )
}