import {AuthService, AuthState} from "@/core/auth/domain/auth-service.ts";
import ApiRoutes from "@/core/api/api-routes.ts";
import createPubSub from "@/core/reactive/service/create-pub-sub.ts";
import ApiClient from "@/core/api/api-client.ts";

const pubsub = createPubSub<AuthState>()

const state: AuthState = {
  initialized: false,
  authentication: undefined,
}

const authServiceImpl: AuthService = {
  isInitialized: () => state.initialized,
  initialize: async () => {
    try {
      const res = await ApiClient.get(ApiRoutes.PING())
      state.authentication = res.ok ? await res.json() : undefined
    } catch {
      state.authentication = undefined
    } finally {
      state.initialized = true
      pubsub.publish(state)
    }
  },
  getAuthState: () => state,
  isAuthenticated: () => !!state.authentication,
  subscribe: pubsub.subscribe
}

export default authServiceImpl
