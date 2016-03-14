import React from 'react';
import LabeledInput from './LabeledInput';

export default class TextInput extends React.Component {
  constructor() {
    super();
  }

  get value() {
    return this.refs.input.value;
  }

  render() {
    const input = (
      <input className="form-control" type="text"
        ref="input"
        name={this.props.ref}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly}
        defaultValue={this.props.defaultValue}/>
    );

    if (this.props.label) {
      return (
        <LabeledInput input={input}
          htmlFor={this.props.ref} label={this.props.label}
          horizontal={this.props.horizontal}
          helpText={this.props.helpText}/>
      );
    }

    return input;
  }
}

TextInput.defaultProps = {
  disabled: false,
  placeholder: '',
  readOnly: false
};

TextInput.propTypes = {
  defaultValue: React.PropTypes.any,
  disabled: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  label: React.PropTypes.string,
  helpText: React.PropTypes.any,
  horizontal: React.PropTypes.bool,
  ref: React.PropTypes.string,
  readOnly: React.PropTypes.bool
};
