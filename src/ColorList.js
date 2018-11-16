import React from "react";
import styled from "styled-components";
import Color from './ColorBlock';

const ColorGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-auto-rows: 200px;
    grid-gap: 32px;
    justify-content: center;

    list-style: none;
    padding: 0;
    margin: 0;
`;

const ColorList = ({ colors, className }) => (
    <ColorGrid className={className}>
        {colors.map(color => (
            <Color key={color.hex} color={color} />
        ))}
    </ColorGrid>
);

export { ColorList };
