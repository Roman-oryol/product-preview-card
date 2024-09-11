import styled from 'styled-components';
import { getImageUrl } from '../../../utils';

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* border-top-left-radius: 1rem;
  border-top-right-radius: 1rem; */
`;

const ProductImage = ({ product }) => {
  return (
    <picture>
      <source
        srcSet={getImageUrl(product, 'desktop')}
        media="(min-width: 1440px)"
      />
      <Img
        src={getImageUrl(product, 'mobile')}
        width="343"
        height="240"
        alt=""
      />
    </picture>
  );
};

export default ProductImage;
