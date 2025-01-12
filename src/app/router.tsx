import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/customer/home";
import WeddingInspiration from "./routes/customer/wedding-inspiration";
import TentPackage from "./routes/customer/tent-package";
import SoundSystem from "./routes/customer/sound";
import Contact from "./routes/customer/contact";
import Navbar from "../components/ui/navbar";
import DetailTenda from "./routes/customer/detail-tenda";
import DetailSound from "./routes/customer/detail-sound";
import DetailPackage from "./routes/customer/detail-package";
import Payment from "./routes/customer/payment";
import Product from "./routes/customer/product";
import AdminLayout from "../components/layout/admin-layout";
import AddProduct from "./routes/admin/add-product";
import AddTentPackage from "./routes/admin/add-tent-package";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      element: <Navbar />,
      children: [
        {
          path: "/wedding-inspiration",
          element: <WeddingInspiration type={"customer"} />,
        },
        {
          path: "/product",
          element: <Product type={"customer"} />,
        },
        {
          path: "/tent-package",
          element: <TentPackage type={"customer"} />,
        },
        {
          path: "/sound-system",
          element: <SoundSystem type={"customer"} />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/detail-tenda/:id",
          element: <DetailTenda />,
        },
        {
          path: "/detail-sound/:id",
          element: <DetailSound />,
        },
        {
          path: "/detail-paket",
          element: <DetailPackage />,
        },
        // {
        //   path: "/payment",
        //   element: <Payment />,
        // },
      ],
    },
    {
      path: "/admin/",
      element: <AdminLayout />,
      children: [
        {
          path: "wedding-inspiration",
          element: <WeddingInspiration type="admin" />,
        },
        {
          path: "product",
          element: <Product type="admin" />,
        },
        {
          path: "tent-package",
          element: <TentPackage type="admin" />,
        },
        {
          path: "sound-system",
          element: <SoundSystem type="admin" />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "add-product",
          element: <AddProduct category="others" />,
        },
        {
          path: "add-sound-system",
          element: <AddProduct category="sound-system" />,
        },
        {
          path: "add-tent-package",
          element: <AddTentPackage />,
        },
        // {
        //   path: "payment",
        //   element: <Payment />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
