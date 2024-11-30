import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 7rem;
    padding: 1.12rem 1.25rem;
    box-sizing: border-box;
    justify-content: space-between;
    background: var(--White-02, #FAFAFB);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.20));
    bottom: 0;
    position: absolute;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2.56rem;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
`;


export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 4rem;

    border: 2px solid;
    border-color: var(--mint02);
    border-radius: 1.875rem;
    background-color:  var(--mint02);
`;

export const ButtonText = styled.div`
    ${font.semibold}
    font-size: 1.5rem;
    color: var(--white02);
`;

export const Text = styled.div`
    ${font.medium}
    color: var(--Black-02, #3D4946);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const BuyButton = styled.div`
    display: flex;
    flex-direction: column;
`;