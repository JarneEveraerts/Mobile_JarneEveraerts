import { useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import User from "../../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/user/slice";

const useSetUser = () => {
  const dispatch = useDispatch();

  const setUserCallback = useCallback(
    async (id) => {
      try {
        const userRef = doc(firestore, "users", id);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = new User(
            userDoc.data().id,
            userDoc.data().name,
            userDoc.data().email,
            userDoc.data().orders
          );
          console.log("User data from Firestore", userData);
          dispatch(setUser(userData));
          const test = useSelector((state) => state.user.data);
          console.log("User set in Redux", test);
        } else {
          console.log("No such user in Firestore!");
        }
      } catch (error) {
        console.error("Error getting user from Firestore:", error);
      }
    },
    [dispatch]
  );

  return setUserCallback;
};

export default useSetUser;
