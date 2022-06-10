import React from "react";

// Aquí me da fallo review y no he conseguido solucionarlo porque me dice que ya está declarada
const ReviewForm = ({review, setReview}) => {

    const handleChange = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    let{gameId, userId, score, review} = review;

    const handleSubmit = () => {

        if(gameId === ' ' || userId === ' ' || score === ' ' || review === ' ' ){
            alert('Tienes algún campo vacío')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        }
        
        fetch('localhost:3003/users/reviews', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))
        
        setReview({
            gameId: ' ',
            userId: ' ',
            score: ' ',
            review: ' '
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="gameId">Id juego: </label>
                <input value={gameId} name="gameId" onChange={handleChange} type="text" id="gameId" className="form-control"/>
            </div>
            <div>
                <label htmlFor="userId">Id usuario: </label>
                <input value={userId} name="userId" onChange={handleChange} type="text" id="userId" className="form-control"/>
            </div>
            <div>
                <label htmlFor="score">Puntuación: </label>
                <input value={score} name="score" onChange={handleChange} type="text" id="score" className="form-control"/>
            </div>
            <div>
                <label htmlFor="review">Review: </label>
                <input value={review} name="review" onChange={handleChange} type="text" id="review" className="form-control"/>
            </div>
            <div>
                <button type="submit">Crear estado</button> 
            </div>
    </form>
    );
}

export default ReviewForm;