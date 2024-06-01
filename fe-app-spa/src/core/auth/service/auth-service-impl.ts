import {AuthService, AuthState} from "@/core/auth/domain/auth-service.ts";
import ApiRoutes from "@/core/api/api-routes.ts";
import createPubSub from "@/core/reactive/service/create-pub-sub.ts";

const pubsub = createPubSub<AuthState>()

const state: AuthState = {
  initialized: false,
  authenticated: false
}

const authServiceImpl: AuthService = {
  isInitialized: () => state.initialized,
  initialize: async () => {
    try {
      const res = await fetch(ApiRoutes.PING(), /*{ redirect: "error" } */)
      state.authenticated = res.status === 200
    } catch {
      state.authenticated = false
    } finally {
      state.initialized = true
      pubsub.publish(state)
    }
  },
  getAuthState: () => state,
  subscribe: pubsub.subscribe
}

export default authServiceImpl
