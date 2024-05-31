import {Listener, PubSub} from "@/core/reactive/domain/pub-sub.ts";

function createPubSub<Payload>(): PubSub<Payload> {
  let listeners: Listener<Payload>[] = []
  return {
    publish: (payload: Payload) => {
      listeners.forEach((listener) => listener(payload))
    },
    subscribe: (listener: Listener<Payload>) => {
      listeners.push(listener)
      return () => {
        listeners = listeners.filter(listener => listener !== listener)
      }
    }
  }
}

export default createPubSub
