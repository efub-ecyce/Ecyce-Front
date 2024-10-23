import styled from 'styled-components';
import * as font from '../../styles/font';

export const NavBarContainer = styled.div`
    width: 27rem;

    @media only screen and (max-width: 768px) {
        body {
            width: 100%;
        }
    }

    height: 80px;
    background-color: var(--white02);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2.5rem 1rem 2.5rem;
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
