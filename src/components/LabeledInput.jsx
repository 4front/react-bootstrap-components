import React from 'react';

export default class LabeledInput extends React.Component {
  render() {
    if (this.props.horizontal) {
      return (
        <div className="form-group">
          <label className="control-label col-md-3" htmlFor={this.props.htmlFor}>
            {this.props.label}
          </label>
          <div className="col-md-9">
            {this.props.input}
          </div>
        </div>
      );
    }

    return (
      <div className={`${this.props.inline ? 'form-inline' : 'form-group'}`}>
        <label className="control-label" htmlFor={this.props.htmlFor}>
          {this.props.label}
        </label>
        {this.props.input}
        {this.props.helpText ? <p className="text-muted">{this.props.helpText}</p> : null}
      </div>
    );
  }
}

LabeledInput.propTypes = {
  input: React.PropTypes.element.isRequired,
  label: React.PropTypes.string,
  helpText: React.PropTypes.any,
  htmlFor: React.PropTypes.string,
  inline: React.PropTypes.bool,
  horizontal: React.PropTypes.bool
};

LabeledInput.defaultProps = {
  inline: false,
  horizontal: false
};
