import styled from 'styled-components';
import * as font from '../../styles/font';

interface BtnProps {
    active: boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }

    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    background-color: var(--white02);
`;

export const FilterIcon = styled.div`
    margin-left: 0.5rem;
`;

export const FilterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%; /* 부모의 너비에 맞춤 */
`;

export const Btn = styled.button<BtnProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 5rem;
    height: 1.9rem;
    border-radius: 0.625rem;
    flex-shrink: 0;
    cursor: pointer;
    margin-left: 0.5rem;
    flex-grow: 1;
    max-width: 10rem;
    border: ${({ active }) => (active ? 'none' : '1.5px solid var(--mint03)')};
    background-color: ${({ active }) => (active ? 'var(--mint01)' : 'transparent')};
    color: ${({ active }) => (active ? 'var(--white02)' : 'var(--mint03)')};
    ${({ active }) => (active ? font.extrabold : font.semibold)};
    transition: all 0.2s ease-in-out;
`;