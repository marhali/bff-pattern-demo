import {Component, PropsWithChildren} from 'react';
import Error from "@/core/ui/presentation/components/error.tsx";

class ErrorBoundary extends Component<PropsWithChildren, { error?: unknown }> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <Error error={this.state.error} />
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
