import React from "react";
import { Carousel } from "react-bootstrap";
import spiderman from '../../images/spiderman.jpg'
import pacman from '../../images/pacman.jpg'
import nosotros from '../../images/nosotros.png'

export default function Presentation() {

    return (
        <div className="presentation">
        <Carousel>
            <Carousel.Item interval={1000}>
                <img 
                  className="imageCarousel"
                  src={spiderman}
                  alt="Inicio"
                  height="540"
                  
                />
                <Carousel.Caption>
                    <h3>Busca nuestros juegos más valorados</h3>
                    <p><a href="/inicio">Aquí</a> vas a encontrar los juegos mejor valorados de toda la historia.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                  
                  className="imageCarousel"
                  src={pacman}
                  alt="Minijuegos"
                  height="540"
                />
                <Carousel.Caption>
                    <h3>Prueba nuestros clásicos</h3>
                    <p><a href="/minijuegos">Aquí</a> podrás jugar a nuestras versiones de juegos de toda la vida.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="imageCarousel"
                  src={nosotros}
                  alt="Nosotros"
                  height="540"
                />
                <Carousel.Caption>
                    <h3 className="nosotrosCarousel">Conoce al equipo</h3>
                    <p className="nosotrosCarousel"><a href="/nosotros">Aquí</a> conoceras a todos los que conformamos Gameflix.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}