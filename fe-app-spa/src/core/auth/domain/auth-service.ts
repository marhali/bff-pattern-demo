import {Subscribable} from "@/core/reactive/domain/pub-sub.ts";
import {Initializable} from "@/core/reactive/domain/initializable.ts";

export type Authentication = {
  userId: string
  username: string
  roles: string[]
}

export type AuthState = {
  initialized: boolean
  authentication?: Authentication
}

export interface AuthService extends Initializable, Subscribable<AuthState> {
  getAuthState: () => AuthState
  isAuthenticated: () => boolean
}
