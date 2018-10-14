import React from 'react'
import styled from 'styled-components'
import avengers from '../data'
import Header from './Header';

const Card = styled.div`
    display: block;
    padding: 15px;
    border: 2px solid black;
    width: 50%;
    height: 350px;
    font-size: 22px;
    background-image: radial-gradient(gold, gold, gold, gold, red);
    opacity: 0.9;
    color: black;
    font-weight: bolder;
    text-align: center;

    p:first-child {
        font-size: 36px;
    }
`

const AvengerImg = styled.img`
    max-width: 50%;
    height: 350px;
    margin-left: 5px;
    border: 2px solid black;
`

const CardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 800px;
    align-items: flex-end;

`

const Container = styled.div`
    background-image: radial-gradient(white,black);
    height: 1000px;

`

const AvengerPage = (props) => {
    const avenger = avengers.find((avenger) => props.match.params.id === `${avenger.id}`)
    return (
        <Container>
            <Header />
            <CardContainer>
                <Card>
                    <p>Name: {avenger.name}</p>
                    <p>Nickname: {avenger.nickname}</p>
                    <p>Description: {avenger.description}</p>
                </Card>
                <AvengerImg src={avenger.img} alt={avenger.name} />
            </CardContainer>
        </Container>
    )
}

export default AvengerPage
