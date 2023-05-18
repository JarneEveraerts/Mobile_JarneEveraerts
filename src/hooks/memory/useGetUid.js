import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const useGetUid = () => {
  const navigation = useNavigation();
  const uId = useSelector((state) => state.uid.data);

  if (!uId) {
    console.log("No user logged in");
    navigation.navigate("Auth", { screen: "Login" });
  }
  return uId;
};

export default useGetUid;
