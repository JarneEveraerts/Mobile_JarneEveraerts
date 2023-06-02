import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { useCallback, useState, useEffect } from "react";

const useGetOrder = (id) => {
  const [order, setOrder] = useState(null);
  console.log("id", id);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderRef = doc(firestore, "orders", id);
        console.log("orderRef", orderRef);
        const orderDoc = await getDoc(orderRef);
        console.log("orderDoc", orderDoc);
        if (orderDoc.exists()) {
          const orderData = orderDoc.data();
          console.log("orderData", orderData);
          setOrder(orderData);
        } else {
          console.log("No such order in Firestore!");
        }
      } catch (error) {
        console.error("Error getting order from Firestore:", error);
      }
    };
    fetchOrder();
  }, [id]);

  return order;
};

export default useGetOrder;
