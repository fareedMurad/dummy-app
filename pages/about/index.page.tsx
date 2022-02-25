import React, { FC } from "react";
import type { NextPage } from 'next'
import { AboutStyled } from "./index.styles";

const About: NextPage = () => {
    return (
        <AboutStyled >
        <div>
            <h2>About</h2>
        </div>
        </AboutStyled>
    )
}

export default About;