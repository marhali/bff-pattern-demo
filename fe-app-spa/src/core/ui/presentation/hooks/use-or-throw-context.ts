import {Context, useContext} from "react";

function useOrThrowContext<T>(context: Context<T>): NonNullable<T> {
  const resolvedContext = useContext(context)

  if(!resolvedContext) {
    throw new Error(`Missing context "${context.displayName}"`)
  }

  return resolvedContext
}

export default useOrThrowContext
