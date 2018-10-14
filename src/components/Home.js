import React from 'react'
import styled from 'styled-components'
import Header from "./Header"



const MainImg = styled.img`
    margin-top: 300px;
`

const Home = () => {
    return (
        <div>
           <Header />
            <MainImg src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_mas_dsk_03_0.jpg" alt="main" />
        </div>
    )
}

export default Home
