
import Landing from './View/Landing/Landing'
import TechnologyHome from './View/Technology/TechnologyHome';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/build-song",
    element: <Landing/>,
  },
  {
    path: "/build-song/technology",
    element: <TechnologyHome />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);