import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
    width: 100%;
    padding-top: 1.5rem;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.94rem;
    cursor: pointer;
`;

export const Contents = styled.div`
    width: 100%;
    display: flex;
    gap: 1.56rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Title = styled.div`
    ${font.bold}
    color: var(--black02);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const Notice = styled.div`
    ${font.medium}
    color: var(--gray01);
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;