import useOrThrowContext from "@/core/ui/presentation/hooks/use-or-throw-context.ts";
import AuthenticationContext from "@/core/auth/presentation/context/authentication-context.ts";

function useAuthenticationContext() {
  return useOrThrowContext(AuthenticationContext)
}

export default useAuthenticationContext
