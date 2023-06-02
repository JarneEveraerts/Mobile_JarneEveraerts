import { useCallback } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUserOrder } from "../../store/user/slice";

const useUserAddOrder = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  const userAddOrder = useCallback(
    async (orderId) => {
      try {
        dispatch(addUserOrder(orderId));
        console.log("user", user);
        const userRef = doc(firestore, "users", user.id);
        console.log("userRef", userRef);
        const userDoc = await getDoc(userRef);
        console.log("userDoc", userDoc);
        if (userDoc.exists()) {
          console.log("userDoc.data()", userDoc.data());
          await updateDoc(userRef, {
            orders: user.orders,
          });
          console.log("User document updated");
        }
      } catch (error) {
        console.error("Error updating user document:", error);
      }
    },
    [dispatch]
  );

  return userAddOrder;
};

export default useUserAddOrder;
