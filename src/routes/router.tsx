import LayoutMain from "@/layouts/LayoutMain";
import Home from "@/modules/home/pages/Home";

const appRouter = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default appRouter;
