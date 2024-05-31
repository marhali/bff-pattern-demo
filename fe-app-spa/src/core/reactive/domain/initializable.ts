export interface Initializable {
  isInitialized: () => boolean;
  initialize: () => Promise<void>;
}
