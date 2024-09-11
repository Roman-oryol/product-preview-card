import { Card } from './styles';
import ProductImage from './product-image/ProductImage';
import product from '../../mocks/product';
import ProductDescription from './productDescription/ProductDescription';

const PreviewCard = () => {
  return (
    <Card>
      <ProductImage product={product} />
      <ProductDescription product={product} />
    </Card>
  );
};

export default PreviewCard;
