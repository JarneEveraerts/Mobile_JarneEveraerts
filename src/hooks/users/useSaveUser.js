import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

const useSaveUser = () => {
  const saveUser = async (user) => {
    try {
      const userRef = doc(firestore, "users", user.id);
      await setDoc(userRef, {
        id: user.id,
        name: user.name,
        email: user.email,
      });
      console.log("User saved to Firestore");
    } catch (error) {
      console.error("Error saving user to Firestore:", error);
    }
  };

  return saveUser;
};

export default useSaveUser;
