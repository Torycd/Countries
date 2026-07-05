import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./AppLayout";
import SelectedCountry from "./components/SelectedCountry";
import Home, { loader } from "./components/Home";
import ErrorComp from "./components/ErrorComp";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorComp />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loader,
        errorElement: <ErrorComp />,
      },
      {
        path: "/:countryCode",
        element: <SelectedCountry />,
        errorElement: <ErrorComp />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
