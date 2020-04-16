import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/Products';

const Products = (props) => {
  console.log('????', props)
  const {dispatch, products} = props
  function handleDelete(id) {
    // dispatch({
    //   type: 'products/delete',
    //   payload: id,
    // });
    dispatch({
      type: 'products/deleteAfter1Second',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products.list} />
    </div>
  );
};

// export default Products;
export default connect((input) => {
  return {
    products: input.products,
  }
})(Products);