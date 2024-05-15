import { createBrowserRouter } from "react-router-dom";
import { Diary } from "./trader/Diary";
import TraderHome from "./trader/TraderHome";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <TraderHome />,
      errorElement: <div>Not Found</div>,
      children: [
        {
          path: "/diary",
          element: <Diary />,
        },
      ],
    },
  ],
  { basename: "/bookme" }
);
