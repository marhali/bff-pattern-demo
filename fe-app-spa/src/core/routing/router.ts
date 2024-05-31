import {createBrowserRouter} from "react-router-dom";

/**
 * Router mandatory for all routes within the application (post-authentication).
 */
const router = createBrowserRouter([
  {
    index: true,
    lazy: () => import('@/modules/todo/presentation/pages/todo-index-page.tsx')
  }
]);

export default router;
