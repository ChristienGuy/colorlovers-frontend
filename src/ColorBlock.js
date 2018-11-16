import React, { Component } from "react";
import styled from "styled-components";
import { isLight } from "./colour-utils";


const FLIP_SPEED = 300;

const Wrapper = styled.li`
    padding: 16px;
    position: relative;
    cursor: pointer;

    font-weight: bold;
    font-size: 1.5rem;
    user-select: none;

    color: ${({ backgroundColor }) =>
        isLight(backgroundColor)
            ? "rgba(0,0,0,.7)"
            : "rgba(255, 255, 255, 0.8)"};

`;

const ColorBlockFront = styled.div`
    position: absolute;
    padding: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #${({ backgroundColor }) => backgroundColor};

    backface-visibility: hidden;
    transition: transform ${FLIP_SPEED}ms ease-out;

    transform: rotateY(${({ isFlipped }) => (isFlipped ? "180deg" : "0")});
`;

const ColorBlockBack = styled.div`
    position: absolute;
    padding: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backface-visibility: hidden;

    background-color: #${({ backgroundColor }) => backgroundColor};

    transition: transform ${FLIP_SPEED}ms ease-out;
    transform: rotateY(${({ isFlipped }) => (isFlipped ? "0" : "180deg")});
`;

class Color extends Component {
    state = {
        isFlipped: false
    };

    onClick = e => {
        this.setState(state => ({
            isFlipped: !state.isFlipped
        }));
    };

    render() {
        const { color, onFavorite } = this.props;
        const { isFlipped } = this.state;

        return (
            <Wrapper onClick={this.onClick} backgroundColor={color.hex}>
                <ColorBlockFront isFlipped={isFlipped} backgroundColor={color.hex}>
                    <div>{color.title}</div>
                </ColorBlockFront>

                <ColorBlockBack isFlipped={isFlipped} backgroundColor={color.hex}>
                    <div>{color.hex}</div>
                    <button onClick={onFavorite}>Favorite</button>
                </ColorBlockBack>
            </Wrapper>
        );
    }
}

export default Color;
