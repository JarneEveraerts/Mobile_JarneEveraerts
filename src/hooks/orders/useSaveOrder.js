import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

const useSaveOrder = () => {
  const saveOrder = async (order) => {
    try {
      const ordersCollection = collection(firestore, "orders");
      const docRef = await addDoc(ordersCollection, {
        userId: order.userId,
        name: order.name,
        email: order.email,
        street: order.street,
        city: order.city,
        postalCode: order.postalCode,
        phoneNumber: order.phoneNumber,
        products: order.products,
        total: order.total,
        orderDate: order.orderDate,
      });
      console.log("Order saved to Firestore with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error saving order to Firestore:", error);
      return null;
    }
  };

  return saveOrder;
};

export default useSaveOrder;
