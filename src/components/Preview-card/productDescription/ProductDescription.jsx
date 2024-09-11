import { BsCart2 } from 'react-icons/bs';
import { Wrapper, Category, Title, Text, Icon } from './styles';
import FullPrice from './FullPrice';
import Button from '../Button';

const ProductDescription = ({ product }) => {
  const { category, productName, description, price, oldPrice } = product;
  return (
    <Wrapper>
      <Category>{category}</Category>
      <Title>{productName}</Title>
      <Text>{description}</Text>
      <FullPrice price={price} oldPrice={oldPrice} />
      <Button>
        <Icon />
        Add to Cart
      </Button>
    </Wrapper>
  );
};

export default ProductDescription;
