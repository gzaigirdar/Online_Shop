
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Inventory_context = createContext();

function Inventory_provider({ children }) {
  const [prod_data, setProddata] = useState([]);
  const DB_API_PRODUCT = process.env.NEXT_PUBLIC_DB_API_PRODUCT;

  // Get all products
  async function get_products() {
    try {
      const res = await axios.get(`${DB_API_PRODUCT}/getallproducts`, { withCredentials: true });
      setProddata(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Edit product
  async function edit_product(prod_details) {
    
    try {
      const res = await axios.post(`${DB_API_PRODUCT}editproduct`, prod_details, { withCredentials: true });
      setProddata(prev => prev.map(item => item._id === res.data._id ? res.data : item));
      return res.data;
    } catch (error) {
      console.error(error.message);
    }
  }

  // Add product
  async function add_product(item_data) {
    try {
      const res = await axios.post(`${DB_API_PRODUCT}addproduct`, item_data, { withCredentials: true });
      setProddata(prev => [...prev, res.data]);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  // Delete product
  async function delete_product(name) {
    try {
      const res = await axios.delete(`${DB_API_PRODUCT}deleteproduct`, { data: { name: name }, withCredentials: true });
      setProddata(prev => prev.filter(item => item.name !== name));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get_products();
  }, []);

  return (
    <Inventory_context.Provider value={{ prod_data, edit_product, add_product, delete_product }}>
      {children}
    </Inventory_context.Provider>
  );
}

export { Inventory_context, Inventory_provider };
