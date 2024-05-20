import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    // Aqui você pode enviar o erro para um serviço de monitoramento de erros
  }

  render() {
    if (this.state.hasError) {
      return <div>Desculpe, algo deu errado: {this.state.error.message}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
