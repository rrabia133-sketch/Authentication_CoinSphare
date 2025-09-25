import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/signup/Signup";
import Signin from "./pages/Auth/signin/Signin";
import EmailVerify from "./pages/Auth/RegisterEmailVerfy/EmailVerify";
import RegisterSuccessfull from "./pages/Auth/RegisterSuccessfull/RegisterSuccessfull";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/EmialVerify",
    element: <EmailVerify />,
  },
  {
    path: "/RegisterSuccessfully",
    element: <RegisterSuccessfull />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
