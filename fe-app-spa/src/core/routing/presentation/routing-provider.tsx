import {RouterProvider} from "react-router-dom"
import router from "@/core/routing/router.ts"

function RoutingProvider() {
  return <RouterProvider router={router} />
}

export default RoutingProvider
