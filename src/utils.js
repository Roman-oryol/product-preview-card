const getImageUrl = (product, size = 'mobile') =>
  `images/${product.imgName}-${size}.jpg`;

export { getImageUrl };
