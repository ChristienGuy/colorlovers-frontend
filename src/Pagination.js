import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`;

const Button = styled.button`
    background-color: #51445f;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 16px 32px;

    cursor: pointer;
`;

const NextButton = styled(Button)`
    margin-left: auto;
`;

const Pagination = ({ onPrev, onNext, page }) => (
    <PaginationWrapper>
        {page > 0 ? <Button onClick={onPrev}>Prev</Button> : null}
        <NextButton onClick={onNext}>Next</NextButton>
    </PaginationWrapper>
);

export default Pagination;
