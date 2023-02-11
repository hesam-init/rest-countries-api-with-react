import HomePage from "@page/home-page";
import InfoPage from "@page/info-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/:country/:code",
    element: <InfoPage />
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
