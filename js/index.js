const cart = new Cart($('#cartModal'));
const productList = new ProductList('products.json', $('.products-container'), $('.carousel-inner'), cart);
