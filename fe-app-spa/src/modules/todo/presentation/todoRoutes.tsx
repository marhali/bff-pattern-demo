import {RouteObject} from "react-router-dom";
import ErrorRoute from "@/core/ui/presentation/components/error-route.tsx";

const todoRoutes: RouteObject[] = [
  {
    index: true,
    lazy: () => import('@/modules/todo/presentation/pages/todo-index-page.tsx'),
    errorElement: <ErrorRoute />
  },
  {
    path: 'create',
    lazy: () => import('@/modules/todo/presentation/pages/todo-create-page.tsx'),
    errorElement: <ErrorRoute />
  },
  {
    path: ':todoId',
    lazy: () => import('@/modules/todo/presentation/pages/todo-edit-page.tsx'),
    errorElement: <ErrorRoute />
  }
]

export default todoRoutes
