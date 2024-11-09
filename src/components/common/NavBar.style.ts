import styled from 'styled-components';
import * as font from '../../styles/font';

export const NavBarContainer = styled.div`
    width: 100%;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }

    height: 80px;
    background-color: var(--white02);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 2.5rem 1rem 2.5rem;
    box-shadow: 0px -3px 4px 3px rgba(163, 163, 163, 0.2);
`;

export const NavButton = styled.div<{ isActive: boolean }>`
    ${font.medium}
    text-align: center;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: ${({ isActive }) => (isActive ? '#181818' : '#A3A3A3')};
`;

export const IconStyle = (isActive: boolean) => ({
    fill: isActive ? '#181818' : '#A3A3A3',
});
