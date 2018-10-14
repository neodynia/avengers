import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: block;
    position: fixed;
    border-bottom: 5px inset black;
    border-top: 5px inset black;
    width: 100%;
    height: 250px;
    background-image: radial-gradient(red, gold);
    z-index: 2000;
    top: 0%;
`

const HeaderDiv= styled.div`
    display: inline-block;
    position: absolute;
    width: 60%;
    font-size: 7.00rem;
    font-family: 'Permanent Marker', cursive;
    right: 30px;
    bottom: 40px;
    background: lightgrey;
    border-radius: 100px;
    border: 10px solid black;
    text-align: center;

    @media (max-width: 1300px) {
        font-size: 5.00rem;
        border: 2px solid black;
        max-width: 100%;
        height: 130px;
    }

    @media (max-width: 1000px) {
        font-size: 4.50rem;
        height: 125px;
    }

    @media (max-width: 800px) {
        font-size: 4.00rem;
        height: 100px;
        width: 70%;
    }

    @media (max-width: 600px) {
        font-size: 2.00rem;
        height: 55px;
        width: 70%;
    }
    @media (max-width: 400px) {
        font-size: 2.00rem;
        height: 50px;
    }
`
const Nav = styled.nav`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 200px;
    width: 100px;
    position: absolute;
    left: 10%;
    top: 6%;
    text-align: center;
    font-family: "Permanent Marker", cursive;
    font-size: 2.00rem;

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        color: white;
    }

    @media (max-width: 900px) {
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: flex-end;
        margin-top: 20px;
        width: 100%;
        font-size: 1.25rem;
    }
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderDiv>The Avengers</HeaderDiv>
            <Nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/avengers'}>Avengers</Link>
            </Nav>
        </HeaderContainer>
    )
}

export default Header
