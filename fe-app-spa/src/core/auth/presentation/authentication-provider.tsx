import {PropsWithChildren, ReactNode, useSyncExternalStore} from "react"
import authServiceImpl from "@/core/auth/service/auth-service-impl.ts"
import AuthenticationContext from "@/core/auth/presentation/context/authentication-context.ts";

type AuthenticationProviderProps = PropsWithChildren & {
  fallback: ReactNode
}

function AuthenticationProvider(props: AuthenticationProviderProps) {
  const { fallback, children } = props

  if(!authServiceImpl.isInitialized()) {
    throw authServiceImpl.initialize()
  }

  const state = useSyncExternalStore(authServiceImpl.subscribe, authServiceImpl.getAuthState)

  if(state.authentication) {
    return (
      <AuthenticationContext.Provider value={state.authentication}>
        {children}
      </AuthenticationContext.Provider>
    )
  }

  return fallback
}

export default AuthenticationProvider
