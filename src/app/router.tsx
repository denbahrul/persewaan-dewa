import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/customer/home";
import WeddingInspiration from "./routes/customer/wedding-inspiration";
import TentAndStage from "./routes/customer/tent-stage";
import TentPackage from "./routes/customer/tent-package";
import SoundSystem from "./routes/customer/sound";
import Contact from "./routes/customer/contact";
import Navbar from "../components/ui/navbar";
import DetailTenda from "./routes/customer/detail-tenda";
import DetailSound from "./routes/customer/detail-sound";
import DetailPackage from "./routes/customer/detail-package";
import Payment from "./routes/customer/payment";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/wedding-inspiration",
          element: <WeddingInspiration />,
        },
        {
          path: "/tent-and-stage",
          element: <TentAndStage />,
        },
        {
          path: "/tent-package",
          element: <TentPackage />,
        },
        {
          path: "/sound-system",
          element: <SoundSystem />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/detail-tenda",
          element: <DetailTenda />,
        },
        {
          path: "/detail-sound",
          element: <DetailSound />,
        },
        {
          path: "/detail-paket",
          element: <DetailPackage />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
