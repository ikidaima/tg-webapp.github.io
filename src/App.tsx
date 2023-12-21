import React, { Fragment, useEffect } from "react";
import { Auth } from "./processes/Auth";
import { useTelegram } from "./entities/Telegram";
import { Header } from "./features/Header";
import Home from "./pages/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <Header />
        <Outlet />
      </Fragment>
    ),

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: "tags",
      },
    ],
  },
]);

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.hide();
    document.body.classList.add(Telegram.colorScheme);
  }, [Telegram.MainButton, Telegram.colorScheme]);

  return (
    <div style={{ height: "100dvh" }} className="relative overflow-auto">
      <Auth>
        <RouterProvider router={router} fallbackElement={<Spinner />} />
      </Auth>
    </div>
  );
}

export default App;
