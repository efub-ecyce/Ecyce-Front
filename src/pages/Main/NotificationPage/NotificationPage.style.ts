import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--white02);

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export const NotiContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100%;
  height: calc(100vh - 3.5rem - 80px); //헤더, 네비바 높이 제거

  padding: 1rem 1.25rem;
  box-sizing: border-box;

  overflow-y: auto;
`;

export const NavWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
`;
