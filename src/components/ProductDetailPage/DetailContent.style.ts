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

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.06rem;
    margin-bottom: 1.25rem;
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
    margin-bottom: 0.69rem;
`;

export const Info = styled.div`
    ${font.semibold}
    color: var(--black02);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 0.44rem;
`;

export const Bio = styled.div`
    ${font.regular}
    color: var(--gray01);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    width: 90%;
    margin-top: 0.69rem;
`;