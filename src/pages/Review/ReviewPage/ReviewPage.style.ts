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
    z-index: 10;
`;

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const DetailWrapper = styled.div`
    width: 90%;
    max-width: 768px;
    padding: 1rem;
    border-radius: 10px;
`;
