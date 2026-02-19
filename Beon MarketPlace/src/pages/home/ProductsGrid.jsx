import { Product } from "./Product";


export function ProductsGrid({products, loadCart}){

    return (
            <div className="products-grid">
                {products.map((product) => {
                return (
                    // ✅ key moved HERE (this is the main fix)
                    <Product key={product.id} product={product} loadCart={loadCart} />

                );
                })}
            </div>

    );
}