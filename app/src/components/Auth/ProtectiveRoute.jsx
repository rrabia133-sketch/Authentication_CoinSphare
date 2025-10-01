import useAuth from "../../hook/useAuth";
import { Navigate } from "react-router-dom";

function ProtectiveRoute({ children }) {
  const { token } = useAuth();

  return <div>{token ? children : <Navigate to="/signin" />}</div>;
}

export default ProtectiveRoute;
