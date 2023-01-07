import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedPage({ children, needLogin = false, guestOnly = false }) {
  let navigate = useNavigate();
  const userSelector = useSelector((state) => state.auth);

  useEffect(() => {
    //wajib login
    if (needLogin && !userSelector?.id) {
      return navigate("/", { replace: true });
    }
  }, []);
  return children;
}

export default ProtectedPage;
