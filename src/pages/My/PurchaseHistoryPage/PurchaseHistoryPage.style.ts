import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: var(--white02);

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  padding: 0 1.25rem;
  box-sizing: border-box;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  margin-bottom: 90px;
  width: 100%;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
