import React from "react";
import { Card } from "react-bootstrap";
import AuthService from "../services/auth.service";
import 'bootstrap/dist/css/bootstrap.css';

const Profile = () => {
    // AÑADIR BUSQUEDA DE LA BBDD
    const currentUser = AuthService.getCurrentUser();
    return (
        <Card className="Card-content">
            <Card.Title className='position-absolute mt-4'>
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                </h3>
            </Card.Title>
            <Card.Text>
                <strong>Id:</strong> {currentUser.id}
            </Card.Text>
            <Card.Text>
                <strong>Email:</strong> {currentUser.mail}
            </Card.Text>
                <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </Card>
    );
};

export default Profile;
