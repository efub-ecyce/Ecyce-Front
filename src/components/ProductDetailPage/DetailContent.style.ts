import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }
`;

export const UserName = styled.div`
    ${font.medium}
    color: var(--black02);
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

export const Title = styled.div`
    ${font.bold}
    color: var(--black02);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const Price = styled.div`
    ${font.semibold}
    color: var(--gray01);
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
`;

export const Info = styled.div`
    ${font.semibold}
    color: var(--black02);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
`;

export const Bio = styled.div`
    ${font.regular}
    color: var(--gray01);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;