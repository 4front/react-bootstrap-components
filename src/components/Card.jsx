import React from 'react';
import {isObject} from 'lodash/object';

export default class Card extends React.Component {
  renderHeader() {
    if (!isObject(this.props.header)) return;

    let headerLeft;
    if (this.props.header.componentLeft) {

    }

    return (<div className="card-header">

      </div>);
  }

  renderHeaderLeft() {
    if (this.props.headerLeft) return this.props.headerLeft;

    if (this.props.title) return this.props.title;
  }

  render() {
    return (
      <div className="card">
        <div className="widget-header">
          {this.props.headerLeft}
          <div className="pull-right">
            {this.props.headerRight}
          </div>
        </div>
        <div className={`widget-body ${this.props.size}`}>
          {this.renderLoading()}
          {this.renderContents()}
        </div>
      </div>
    )
  }
}

Widget.defaultProps = {
  display: 'inline'
};

Widget.propTypes = {
  display: React.PropTypes.oneOf(['block', 'inline']),
  children: React.PropTypes.any,
  size: React.PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  header: React.PropTypes.object
};
