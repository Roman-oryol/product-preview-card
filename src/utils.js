const getImageUrl = (product, size = 'mobile') =>
  `src/assets/images/${product.imgName}-${size}.jpg`;

export { getImageUrl };
