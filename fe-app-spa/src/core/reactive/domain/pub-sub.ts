export type Listener<Payload> = (payload: Payload) => void

export type TeardownFunction = () => void

export type SubscribeFunction<Payload> = (listener: Listener<Payload>) => TeardownFunction

export interface Subscribable<Payload> {
  subscribe: SubscribeFunction<Payload>
}

export interface PubSub<Payload> {
  publish: (payload: Payload) => void
  subscribe: SubscribeFunction<Payload>
}
