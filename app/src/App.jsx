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
import ProtectiveRoute from "./components/Auth/ProtectiveRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectiveRoute>
          <Dashboard />,
        </ProtectiveRoute>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectiveRoute>
          <TransactionPage />
        </ProtectiveRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectiveRoute>
          <Support />
        </ProtectiveRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
          <Signup />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySigninRoute>
          <Signin />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Register-Emial-Verify/:email",
      element: (
        <AlreadySigninRoute>
          <EmailVerify />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySigninRoute>
          <RegisterSuccessfull />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Forgot-Password",
      element: (
        <AlreadySigninRoute>
          <ForgotPassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Forgot-success/:email",
      element: (
        <AlreadySigninRoute>
          <ForgotPasswordSend />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySigninRoute>
          <ResetPassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Reset-success",
      element: (
        <AlreadySigninRoute>
          <ResetPasswordDone />
        </AlreadySigninRoute>
      ),
    },
  ]);

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
