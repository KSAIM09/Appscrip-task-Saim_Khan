import React, { useEffect, useState } from "react";
import { getProducts } from '/src/api/api.js';
import ProductCard from "../ProductCard/ProductCard";

const Main = ({ isSidebarVisible }) => {   // Receive sidebar visibility as a prop
  const [products, setProducts] = useState([]);   // State to store fetched products
  const [loading, setLoading] = useState(true);   // State to handle loading

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);             // Set products after fetching
        setLoading(false);                        // Disable loading after fetching
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);                        // Disable loading in case of error
      }
    };

    fetchProducts();                              // Call the function to fetch products
  }, []);                                         // Empty dependency array means it runs once on component mount

  if (loading) {
    return <p>Loading...</p>;                     // Show a loading indicator while fetching
  }

  return (
    <>
      <div className={`productsContainer ${!isSidebarVisible ? 'sidebarHidden' : ''}`}>
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </>
  );
};

export default Main;
