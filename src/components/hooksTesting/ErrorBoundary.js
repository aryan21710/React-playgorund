import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div style={styles.buttonCompWrapper}>
          <br />
          <br />
          <br />

            <h2 style={styles.error}>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }
  

  const styles = {
    buttonCompWrapper: {
      width: "100vw",
      height: "100vh",
      background: "grey",
      color: "white",

    },
    error: {
        color: "white",
      margin: "1vh 2vw",
      padding: "1vh 1vw",
      background: "pink",
    },
  };
  export default ErrorBoundary;


