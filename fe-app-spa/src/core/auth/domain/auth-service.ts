import {Subscribable} from "@/core/reactive/domain/pub-sub.ts";
import {Initializable} from "@/core/reactive/domain/initializable.ts";

export type AuthState = {
  initialized: boolean
  authenticated: boolean
}

export interface AuthService extends Initializable, Subscribable<AuthState> {
  getAuthState: () => AuthState
}
