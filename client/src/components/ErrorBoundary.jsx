import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col bg-[#0a0a0a]">
          <div className="h-[70vh] flex items-center justify-center">
            <div className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] max-w-lg">
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-xl font-bold text-red-500 mb-2">Something went wrong</h2>
              <p className="text-[#f5f5f5] mb-4">We're sorry, but there was an error loading the drivers data.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-[#b50000] text-white rounded-lg hover:bg-[#8c0000] transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 