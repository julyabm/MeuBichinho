import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  margin-top: 64px;
  height: 64px;
  border: 1px solid var(--blue);
  background-color: var(--blue);

  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  border-radius: 20px;

  cursor: pointer;

  transition: all 0.2s;

  :hover {
    background: ${darken(0.2, '#38b6ff')};
  }
`;
