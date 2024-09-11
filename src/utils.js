const getImageUrl = (product, size = 'mobile') =>
  `public/images/${product.imgName}-${size}.jpg`;

export { getImageUrl };
