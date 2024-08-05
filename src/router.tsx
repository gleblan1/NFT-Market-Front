import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CollectionPage } from "./pages/CollectionPage/CollectionPage";
import { WelcomePage } from "./pages/WelcomePage";
import { OwnTokensPage } from "./pages/OwnTokensPage";
import MintPage from "./pages/MintPage/MintPage";
import { TokenPage } from "./pages/TokenPage/TokenPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/collection",
        element: <CollectionPage />,
      },
      {
        path: "/own-tokens",
        element: <OwnTokensPage />,
      },
      {
        path: "/mint-page",
        element: <MintPage />
      },
      {
        path: "/token/:id",
        element: <TokenPage/>
      }
    ],
  },
]);