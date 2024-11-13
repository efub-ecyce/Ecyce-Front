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

export const Top = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    flex-shrink: 0;
`;

export const NavBar = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

export const Contents = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 1rem;
    width: 100%;
    justify-content: center;
    overflow-y: auto;
    margin-top: calc(3.5rem);
    margin-bottom: 80px;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;
