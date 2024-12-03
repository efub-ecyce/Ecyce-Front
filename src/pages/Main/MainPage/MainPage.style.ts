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
  position: fixed;
  top: 0;
  flex-shrink: 0;
`;

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  bottom: -1px;
`;

export const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(50% - 1.3rem), 1fr));
  justify-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  overflow-y: auto;
  padding-top: 7rem;
  padding-bottom: 6rem;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  align-content: start;
`;
