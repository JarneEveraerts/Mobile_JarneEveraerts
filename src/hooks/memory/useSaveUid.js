import { useDispatch } from "react-redux";
import { saveUid } from "../../store/uId/slice";

const useSaveUid = () => {
  const dispatch = useDispatch();

  const saveUidToStore = (uId) => {
    dispatch(saveUid(uId)); // Dispatch the saveUid action with the provided uId string
  };

  return saveUidToStore;
};

export default useSaveUid;
