import {createBrowserRouter, Outlet} from "react-router-dom";
import AppLayout from "@/core/ui/presentation/layouts/app-layout.tsx";
import todoRoutes from "@/modules/todo/presentation/todoRoutes.tsx";
import ErrorRoute from "@/core/ui/presentation/components/error-route.tsx";

/**
 * Router mandatory for all routes within the application (post-authentication).
 */
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <Outlet />
      },
      {
        path: 'todo',
        children: todoRoutes
      }
    ]
  },
]);

export default router;
