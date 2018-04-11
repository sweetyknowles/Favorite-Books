import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BackGroundBox = styled.div`
background-color: rgb(189, 243, 236);
height: 100vh;
width: 100vw;
`

const LinkStyle = styled.div`
h4 {
font-size: 45px;
font-family: Philosopher;
}
p {
font-family: EB Garamond;
font-size: 25px;
}
border: 3.5px solid grey;
margin-top: 125px;
`

class About extends Component {
    render() {
        return (
            <div>
                <LinkStyle>
                    <h4>About Driftr App</h4>
                    <p>Driftr is a travel blogging application created by Murphy Potts, Sweety Knowles and Cody Pellom. Driftr is part of General Assembly's WDI14 Project 4 (React on Rails). </p>
                    <br />
                    <p> Driftr enables it users to write about places they have traveled to, and share what they have written with friends and family. Users can create their own listing, or choose from Cities from around the world. </p>
                </LinkStyle>

                <BackGroundBox>

                </BackGroundBox>
            </div>

        );
    }
}

export default About;