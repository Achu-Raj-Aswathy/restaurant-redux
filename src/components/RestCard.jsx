import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
    return (
        <>
            <Link to={`/restaurant-view/${restaurant.id}`} style={{textDecoration:"none"}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"
                        height={'300px'}
                        width={'100%'}
                        src={restaurant.photograph} />
                    <Card.Body>
                        <Card.Title>{restaurant.name}</Card.Title>
                        <Card.Text>{restaurant.neighborhood}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </>
    )
}

export default RestCard