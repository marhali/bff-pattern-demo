import {PropsWithChildren, ReactNode, useSyncExternalStore} from "react"
import authServiceImpl from "@/core/auth/service/auth-service-impl.ts"

type AuthenticationProviderProps = PropsWithChildren & {
  fallback: ReactNode
}

function AuthenticationProvider(props: AuthenticationProviderProps) {
  const { fallback, children } = props

  if(!authServiceImpl.isInitialized()) {
    throw authServiceImpl.initialize()
  }

  const state = useSyncExternalStore(authServiceImpl.subscribe, authServiceImpl.getAuthState)
  return state.authenticated ? children : fallback
}

export default AuthenticationProvider
