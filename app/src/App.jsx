import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/signup/Signup";
import Signin from "./pages/Auth/signin/Signin";
import EmailVerify from "./pages/Auth/RegisterEmailVerfy/EmailVerify";
import RegisterSuccessfull from "./pages/Auth/RegisterSuccessfull/RegisterSuccessfull";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSend from "./pages/Auth/ForgotPasswordsend/ForgotPasswordSend";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ResetPasswordDone from "./pages/Auth/RsetpaswordDone/ResetPasswordDone";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
    path: "/Register-Emial-Verify",
    element: <EmailVerify />,
  },
  {
    path: "/Register-Successfully",
    element: <RegisterSuccessfull />,
  },
  {
    path: "/Forgot-Password",
    element: <ForgotPassword />,
  },
  {
    path: "/Forgot-success",
    element: <ForgotPasswordSend />,
  },
  {
    path: "/Reset-Password",
    element: <ResetPassword />,
  },
  {
    path: "/Reset-success",
    element: <ResetPasswordDone />,
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
