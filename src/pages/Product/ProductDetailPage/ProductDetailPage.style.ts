import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.28125rem;
  box-sizing: border-box;

  background-color: var(--white02);

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.28125rem;
  box-sizing: border-box;
  top: 0;
  position: absolute;
  z-index: 2;
`;

export const BackBtn = styled.div`
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-bottom: 8rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
