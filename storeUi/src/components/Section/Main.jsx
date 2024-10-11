import React, { useEffect, useState } from "react";
import { getProducts } from '/src/api/api.js';
import ProductCard from "../ProductCard/ProductCard";

const Main = ({ isSidebarVisible }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mainContentContainer"> {/* Ensure this container maintains the max-width */}
      <div className="baseContainer"> {/* Add the baseContainer here */}
        <div className={`productsContainer ${!isSidebarVisible ? 'fourColumns' : 'threeColumns'}`}>
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
