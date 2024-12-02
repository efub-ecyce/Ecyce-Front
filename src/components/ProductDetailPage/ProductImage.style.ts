import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 23.1875rem;
    position: relative;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }
`;

export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.28125rem;
    box-sizing: border-box;
    top: 0;
    position: absolute;
    z-index: 2;
`;

export const BackBtn = styled.div`
    cursor: pointer;
`;

export const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background-color: var(--white01);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;