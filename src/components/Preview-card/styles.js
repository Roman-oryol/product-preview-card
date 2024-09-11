import styled from 'styled-components';

const Card = styled.article`
  width: 343px;
  border-radius: 1rem;
  overflow: hidden;
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 300px 300px;
    width: auto;
  }
`;

export { Card };
