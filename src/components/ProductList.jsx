import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
    // Extragem vectorul de produse primit din Category
    const { products } = props;

    return (
        <div className="row mb-4">
            {
                products.map((product) => {
                    return <ProductItem
                        // Pentru a pasa toate proprietatile obiectului product mai departe
                        // ca props, putem folosi urmatoarea sintaxa:
                        {...product}
                        // Nu uitam sa pasam cheia!
                        key={product.id}
                    />
                })
            }
        </div>
    );
}

export default ProductList;