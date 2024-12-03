import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 3.5rem);
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

  overflow-y: scroll;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;
