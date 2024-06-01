import {Outlet} from "react-router-dom";
import AppHeader from "@/core/ui/presentation/components/app-header.tsx";
import {Suspense} from "react";
import LoadingSpinner from "@/core/ui/presentation/components/loading-spinner.tsx";
import ErrorBoundary from "@/core/ui/presentation/components/error-boundary.tsx";

function AppLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <AppHeader />
      <main className="grow">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default AppLayout;
