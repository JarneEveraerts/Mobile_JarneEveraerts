import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase";
import Product from "../../../models/Product";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(firestore, "products");
        const productsSnapshot = await getDocs(productsCollection);

        const fetchedProducts = [];
        productsSnapshot.forEach((doc) => {
          const productData = new Product(
            doc.id,
            doc.data().name,
            doc.data().price,
            doc.data().image,
            doc.data().description
          );
          fetchedProducts.push(productData);
        });

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error getting products from Firestore:", error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useGetAllProducts;
