import LayoutMain from "@/layouts/LayoutMain";
import Home from "@/modules/home/pages/Home";
import SistemaRopa from "@/modules/SistemaRopa/page/SistemaRopa";

const appRouter = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/SistemaRopa",
        element: <SistemaRopa />,
      },
    ],
  },
];

export default appRouter;
