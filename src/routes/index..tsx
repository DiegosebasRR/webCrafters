import { useRoutes } from "react-router-dom";

import appRouter from "./router";

function AppRouter() {
  return useRoutes([...appRouter]);
}

export default AppRouter;
