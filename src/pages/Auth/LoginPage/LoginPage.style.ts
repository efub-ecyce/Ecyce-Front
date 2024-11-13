import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fafafb;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 0 1.28125rem;
    box-sizing: border-box;

    position: relative;
`;

export const Title = styled.h1`
    color: var(--Grayscale-100, #000);
    text-align: center;
    font-family: "SUIT Variable";
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 900;
    line-height: 150%; /* 4.6875rem */
`;