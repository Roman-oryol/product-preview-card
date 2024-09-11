import styled from 'styled-components';
import { BsCart2 } from 'react-icons/bs';

const Wrapper = styled.section`
  padding: 2.4rem;
  background-color: var(--color-white);

  @media (min-width: 1440px) {
    padding: 3.1rem;
  }
`;

const Category = styled.p`
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.34rem;

  @media (min-width: 1440px) {
    margin-bottom: 1.6rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 1.4rem;
  font-family: var(--font-secondary);
  font-weight: 700;
  font-size: 3.3rem;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  color: var(--color-very-dark-blue);

  @media (min-width: 1440px) {
    margin-bottom: 2.3rem;
  }
`;

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 2.2rem;

  @media (min-width: 1440px) {
    line-height: 1.7;
    /* margin-bottom: 2.2rem; */
  }
`;

const Icon = styled(BsCart2)`
  margin-right: 10px;
`;

export { Wrapper, Category, Title, Text, Icon };
