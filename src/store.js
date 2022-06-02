import { useEffect, useState } from 'react';

import { Card, Button, Form, Row, Col } from "react-bootstrap";

// STORE DE PRUEBAS

export const FirstCities = () => {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        const getCities = () => {
            fetch('http://localhost:5000/city')
            .then(res => res.json())
            .then(res => setCities(res))
        }
        getCities()    
    }, [])

    const [ciudadesFiltradas, setCiudadesFiltradas] = useState();

    const [formMantenerFiltros, setformMantenerFiltros] = useState({
        name: '',
        desc1: '',
        desc2: '',
        img: ''
      });
      
      function filterCityName(name, desc1, desc2, img) {
        const _name = name ? name?.toLowerCase() : "";
        const _desc1 = desc1 ? desc1?.toLowerCase() : "";
        const _desc2 = desc2 ? desc2?.toLowerCase() : "";
        const _img = img ? img?.toLowerCase() : "";
        
        const filtname = cities.filter(
          (city) => ((city.name?.toLowerCase().startsWith(_name)) 
          && (city.desc1?.toLowerCase().startsWith(_desc1))
          && (city.desc2?.toLowerCase().startsWith(_desc2))
          && (city.img?.toLowerCase().startsWith(_img)))
        );
        
        if (_name === "" && _desc1 === "" && _desc2 === ""
        && _img
        ) {
          setCiudadesFiltradas(cities);
        } else {
          setCiudadesFiltradas(filtname);
        }
      }

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        
        fetch('http://localhost:5000/city/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
    }

    //
    
    //

    // .slice(0,10) (Para mapear la lista de forma limitada)

    return(
        <div className="Home-App">
            <h1>Títulos más buscados</h1>
            <Form colspan="2">
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Ejemplo: Minecraft..."
                                onChange={(e) => {
                                setformMantenerFiltros({
                                    name: e.target.value,
                                    desc1: formMantenerFiltros.desc1,
                                    desc2: formMantenerFiltros.desc2,
                                    img: formMantenerFiltros.img,
                                })
                                filterCityName(e.target.value,formMantenerFiltros.desc1,
                                formMantenerFiltros.desc2,formMantenerFiltros.img);
                                }}
                            />
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <br/>
            <div className="Home-Content">
            {ciudadesFiltradas?.slice(0,10).map((city) => (
                <a href={"/city/"+city.id} className="Linker">
                <Card>
                    <Card.Img src={city.img} alt="Card image" width="50%" height="auto"/>
                <Card.ImgOverlay>
                    <Card.Title className="Card-Title">{city.name}</Card.Title>
                    <Card.Text className="Card-Font">
                        {city.desc1}
                    </Card.Text >
                   <a  href={city.desc2} className="Linker"><Card.Text className="Card-Font">Wiki de {city.name}</Card.Text></a>
                </Card.ImgOverlay>
                </Card>
                <Button onClick={() => handleDelete(city.id)} className='btn btn-danger'>
                    Eliminar
                </Button>
                </a>
            ))}
            </div>
        </div>
        
    )
}
