import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  padding: 13px;
  font-family: var(--font-primery);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.6;
  color: var(--color-white);
  background-color: var(--color-dark-cyan);
  border-radius: 0.8rem;

  &:hover {
    background-color: hsl(158, 26%, 37%);
  }
`;

export default Button;
