import React, { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Auth } from "./processes/Auth";
import { useTelegram } from "./entities/Telegram";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import Tags from "./pages/Tags";
import AddTag from "./pages/AddTag";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        children: [
          {
            index: true,
            element: <Tags />,
          },
          {
            path: "add",
            element: <AddTag />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    document.body.classList.add(Telegram.colorScheme);
  }, [Telegram.MainButton, Telegram.colorScheme]);

  return (
    <div style={{ height: "100dvh" }} className="relative overflow-auto">
      <QueryClientProvider client={queryClient}>
        <Auth>
          <RouterProvider router={router} fallbackElement={<Spinner />} />
        </Auth>
      </QueryClientProvider>
    </div>
  );
}

export default App;
