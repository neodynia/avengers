import React from 'react'
import avengers from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from './Header';

const Card = styled.div`
    display: block;
    padding: 15px;
    border: 2px solid black;
    max-width: 50%;
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

const Container = styled.div`
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-top: 8px solid white;
    border-left: 8px solid white;
    border-right: 8px solid white;

    a {
        text-decoration: none;
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
    height: 360px;

`
const AvengerContainer = styled.div`
    padding: 300px 0 30px 0;
    background: black;
`


class AvengersList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            avengers: avengers
        }
    }

    render() {
        return (
            <AvengerContainer>
                <Header />
                <Container>
                    {this.state.avengers.map((item) => {
                        return (
                            <Link to={`/avengers/${item.id}`}>
                                <CardContainer key={Math.random() * 20}>
                                    <Card
                                        key={Math.random() * 10}
                                        name={item.name}
                                        nickname={item.nickname}
                                        desc={item.description}
                                        img={item.img}
                                    >
                                        <p>Name: {item.name}</p>
                                        <p>Nickname: {item.nickname}</p>
                                        <p>Description: {item.description}</p>
                                    </Card>
                                    <AvengerImg src={item.img} alt={item.name} key={item.name} />
                                </CardContainer>
                            </Link>
                        )
                    })}
                </Container>
            </AvengerContainer>
        )
    }
}

export default AvengersList
