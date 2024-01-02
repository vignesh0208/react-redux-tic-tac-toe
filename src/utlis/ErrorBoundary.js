import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorLog) {
    console.log(error, errorLog);
  }

  render() {
    if (this.state.hasError) {
      return <div className='error'>Error while rendering</div>;
    }
    return this.props.children;
  }
}
