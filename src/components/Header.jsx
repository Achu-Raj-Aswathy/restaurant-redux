import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
    const dispatch = useDispatch()
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to={'/'} style={{ textDecoration: "none", color: "white" }}>FOOD CIRCLE</Link></Navbar.Brand>
                    <div className='justify-content-center'>
                        <i class="fa-solid fa-magnifying-glass me-3"></i>
                        <input type="text" placeholder="Search"
                        onChange={(e) => dispatch(search(e.target.value))} />
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHAICe6LqleBv56lgVTBu16YqN-BB1-aQ-_g&usqp=CAU"
                        alt="" width={"100px"} height={"60px"} />
                </Container>
            </Navbar>
        </>
    )
}

export default Header