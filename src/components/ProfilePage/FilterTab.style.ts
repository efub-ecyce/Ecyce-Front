import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    padding: 1rem 1.28125rem;
    box-sizing: border-box;
`;

export const Filter = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
`;

interface FilterNameProps {
    isSelected: boolean;
}

export const FilterName = styled.div<FilterNameProps>`
    ${font.bold}
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 1rem;

    color: ${({ isSelected }) => (isSelected ? 'var(--mint01)' : 'var(--black02)')};
`;

export const Line = styled.div`
    width: 11.8125rem;
    height: 0.125rem;
    background-color: var(--mint01);
`;
