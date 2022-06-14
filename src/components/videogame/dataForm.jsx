import React from "react";
import { Form, Button } from "react-bootstrap";

const DataForm = ({data, setData}) => {

    const handleChange = e => {
        setData({
            ...data,
            status: e.target.value
        })
    }

    let{status} = data;

    const handleSubmit = () => {
        try {
            const requestInit = {
              method: 'POST',
              headers: {'Content-Type': 'application/json' , 'Authorization': 'Bearer julenverne'},
              body: JSON.stringify({
                userId: 1,
                gameId: data.id,
                status: data.status
              })
            }
            fetch('http://localhost:3003/users/data', requestInit)
              .then(res => res.json())
              .then(res => console.log(res));

            setData({
              userId: 1,
              gameId: data.id,
              status: ''
            })
        } catch (e) {
          console.error(e)
        }
    }

    return (
        
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Estado del juego</Form.Label>
                <Form.Select
                  required="required"
                  value={status} 
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    ---
                  </option>
                  <option key="comprado" value="Comprado">
                    Comprado
                  </option>
                  <option key="deseados" value="Deseados">
                    Deseado
                  </option>
                  <option key="favorito" value="Favorito">
                    Favorito
                  </option>
                  <option key="pasados" value="Pasados">
                    Pasado
                  </option>
                </Form.Select>
            </Form.Group>
            <Button type="submit">Guardar Estado</Button>
        </Form>
    );
}

export default DataForm;

                