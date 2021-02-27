import hoistStatics from 'hoist-non-react-statics';
import React from 'react';

/**
 * Allows ${rafWait} animation frames to complete to allow other components to update
 * and re-render before mounting and rendering an expensive `WrappedComponent`.
 */
export default function withDeferComponentRender(WrappedComponent, { rafWait = 2 } = {}) {
  class DeferredRenderWrapper extends React.Component {
    state = {
      shouldRender: false,
    };

    componentDidMount() {
      const running = () => {
        this.setState({ shouldRender: true });
      };
      let chain = running;

      Array(rafWait)
        .fill()
        .forEach(() => {
          const ref = chain;
          chain = () => window.requestAnimationFrame(ref);
        });

      chain();
    }

    render() {
      const { shouldRender } = this.state;
      return shouldRender ? <WrappedComponent {...this.props} /> : null;
    }
  }

  return hoistStatics(DeferredRenderWrapper, WrappedComponent);
}
