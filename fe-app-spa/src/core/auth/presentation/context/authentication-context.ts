import {createContext} from "react";
import {Authentication} from "@/core/auth/domain/auth-service.ts";

const AuthenticationContext = createContext<Authentication | undefined>(undefined)

AuthenticationContext.displayName = "AuthenticationContext"

export default AuthenticationContext
