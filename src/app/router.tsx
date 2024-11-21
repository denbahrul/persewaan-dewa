import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingRoute from "./routes/landing";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}
