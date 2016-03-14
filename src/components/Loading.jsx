import React from 'react';

export default class Loading extends React.Component {
  render() {
    let children;
    switch (this.props.type) {
      case 'doubleBounce':
      default:
        children = [
          <div key='bounce1' className="double-bounce1"/>,
          <div key='bounce2' className="double-bounce2"/>
        ];
      break;
    }

    return (
      <div className="loading" style={this.props.style}>
        {children}
      </div>
    );
  }
}

Loading.defaultProps = {
  type: 'doubleBounce'
};

Loading.propTypes = {
  style: React.PropTypes.object,
  type: React.PropTypes.oneOf(['doubleBounce'])
};
