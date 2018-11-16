import React, { Component } from "react";
import styled from "styled-components";
import { ColorList } from "./ColorList";
import Pagination from './Pagination';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 48px;
`;

const StyledColorList = styled(ColorList)`
    margin-bottom: 48px;
`;

const PAGE_OFFSET = 20;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorList: [],
            page: 0
        };

        this.getColors = this.getColors.bind(this);
    }

    componentDidMount() {
        this.getColors(0);
    }

    getColors({ page }) {
        fetch(`http://localhost:8000/api/colors?resultOffset=${page}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    colorList: json
                });
            });
    }

    prevPage = e => {
        this.setState(
            state => ({
                page: state.page - PAGE_OFFSET
            }),
            () => {
                this.getColors({ page: this.state.page });
            }
        );
    };

    nextPage = e => {
        this.setState(
            state => ({
                page: state.page + PAGE_OFFSET
            }),
            () => {
                this.getColors({ page: this.state.page });
            }
        );
    };

    render() {
        const { page } = this.state;
        return (
            <Wrapper>
                <StyledColorList colors={this.state.colorList} />
                <Pagination onNext={this.nextPage} onPrev={this.prevPage} page={page} />
            </Wrapper>
        );
    }
}

export default App;
