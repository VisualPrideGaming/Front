import React from "react";
import { Button, Form } from "react-bootstrap";

const ReviewForm =  ({data, setData}) => {

    const handleChange = e => {
        setData({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    let{score, review} = data;

    const handleSubmit = () => {

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        }
        
        fetch('localhost:3003/users/reviews', requestInit, {
            headers: new Headers({
                'Authorization': 'Bearer julenverne'
            }),
            })
            .then(res => res.json())
            .then(res => console.log(res))
        
        setData({
            gameId: data.gameId,
            userId: 1,
            score: ' ',
            review: ' '
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="score">Puntuación</Form.Label>
                <Form.Select
                  required="required"
                  value={score}
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    ---
                  </option>
                  <option key="1" value="1">1</option>
                  <option key="2" value="2">2</option>
                  <option key="3" value="3">3</option>
                  <option key="4" value="4">4</option>
                  <option key="5" value="5">5</option>
                </Form.Select>
            
                <Form.Label htmlFor="review" >Review:</Form.Label>
                <Form.Control
                  as="textarea" rows={3} 
                  required="required"
                  placeholder="Introducir la review..."
                  value={review}
                  onChange={handleChange}
                />
            </Form.Group>
            <Button type="submit">Enviar Review</Button> 
        </Form>
    );
}

export default ReviewForm;