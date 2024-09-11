import styled from 'styled-components';

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  column-gap: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1440px) {
    margin-bottom: 2.7rem;
  }
`;

const Price = styled.span`
  margin-left: 0.2rem;
  font-family: var(--font-secondary);
  font-size: 3.3rem;
  font-weight: 700;
  color: var(--color-dark-cyan);
`;

const OldPrice = styled.span`
  text-decoration: line-through;
`;

function FullPrice({ price, oldPrice }) {
  return (
    <Wrapper>
      <Price>${price}</Price>
      {oldPrice && <OldPrice>${oldPrice}</OldPrice>}
    </Wrapper>
  );
}

export default FullPrice;
