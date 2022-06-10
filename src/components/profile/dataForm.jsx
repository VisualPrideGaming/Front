import React from "react";

const DataForm = ({data, setData}) => {

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let{userId, gameId, status} = data;

    const handleSubmit = () => {

        if(userId === ' ' || gameId === ' ' || status === ' ' ){
            alert('Tienes algún campo vacío')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        
        fetch('localhost:3003/users/data', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))
        
        setData({
            userId: ' ',
            gameId: ' ',
            status: ' '
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userId">Id usuario: </label>
                <input value={userId} name="userId" onChange={handleChange} type="text" id="userId" className="form-control"/>
            </div>
            <div>
                <label htmlFor="gameId">Id juego: </label>
                <input value={gameId} name="gameId" onChange={handleChange} type="text" id="gameId" className="form-control"/>
            </div>
            <div>
                <label htmlFor="status">Estado del juego: </label>
                <input value={status} name="status" onChange={handleChange} type="text" id="status" className="form-control"/>
            </div>
            <div>
                <button type="submit">Crear estado</button> 
            </div>
    </form>
    );
}

export default DataForm;