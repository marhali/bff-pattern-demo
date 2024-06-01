import {useRouteError} from "react-router-dom";
import Error from "@/core/ui/presentation/components/error.tsx";

function ErrorRoute() {
  const error = useRouteError()
  return <Error error={error} />
}

export default ErrorRoute
