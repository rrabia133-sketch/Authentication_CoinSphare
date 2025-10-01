import useAuth from "../../hook/useAuth";
import { Navigate } from "react-router-dom";

function AlreadySigninRoute({ children }) {
  const { token } = useAuth();

  return <div>{!token ? children : <Navigate to="/" />}</div>;
}

export default AlreadySigninRoute;
