import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import User from "../../../models/User";

const useGetUserById = (id) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRef = doc(firestore, "users", id);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = new User(
            userDoc.data().id,
            userDoc.data().name,
            userDoc.data().email
          );
          setUser(userData);
        } else {
          console.log("No such user in Firestore!");
        }
      } catch (error) {
        console.error("Error getting user from Firestore:", error);
      }
    };

    fetchUser();
  }, [id]);

  return user;
};

export default useGetUserById;
