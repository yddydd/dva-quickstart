import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/Products';

const Products = (store) => {
  console.log('????', store)
  const {dispatch, products} = store
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect((input) => {
  console.log('connect', input)
  return {
    products: input.products,
  }
})(Products);