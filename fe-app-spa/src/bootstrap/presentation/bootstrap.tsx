import {lazy, Suspense} from "react"
import LoadingSpinner from "@/core/ui/presentation/components/loading-spinner.tsx"
import AuthenticationProvider from "@/core/auth/presentation/authentication-provider.tsx";
import ErrorBoundary from "@/core/ui/presentation/components/error-boundary.tsx";

const RoutingProvider = lazy(() => import('@/core/routing/presentation/routing-provider.tsx'))
const PreRoutingProvider = lazy(() => import('@/core/routing/presentation/pre-routing-provider.tsx'))

function Bootstrap() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthenticationProvider fallback={<PreRoutingProvider />}>
          <RoutingProvider />
        </AuthenticationProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default Bootstrap
