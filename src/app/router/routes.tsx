import DetailPage from "@page/detail-page";
import HomePage from "@page/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/:country/:code",
    element: <DetailPage />
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
