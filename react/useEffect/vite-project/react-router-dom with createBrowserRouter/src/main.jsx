import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App"
import Contacts from "./Contacts";
import About from "./About";
import AboutCareer from "./AboutCareer";
import AboutCompany from "./AboutCompany";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>ERROR</h1>,
    
    children: [
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "about",
        element: <About />,
        children:[
          {
            path: "about-1",
            element: <AboutCareer />
          },
          {
            path: "about-2",
            element: <AboutCompany />,
      
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);