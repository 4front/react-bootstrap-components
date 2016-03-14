import React from 'react';
import LabeledInput from './LabeledInput';

export default class SelectInput extends React.Component {
  constructor() {
    super();
  }

  get value() {
    return this.refs.select.value;
  }

  renderOption(option) {
    // Don't render the option if the filter function does not return true
    if (this.props.filter) {
      if (this.props.filter(option) !== true) {
        return null;
      }
    }

    if (option === Object(option)) {
      const value = option[this.props.valueAttribute];
      return (
        <option value={value} key={value}>
          {option[this.props.labelAttribute]}
        </option>
      );
    }

    return <option key={option} value={option}>{option}</option>;
  }

  render() {
    let emptyOption = null;
    if (this.props.emptyOption) {
      emptyOption = <option/>;
    }

    const select = (
      <select className="form-control" defaultValue={this.props.defaultValue}
        onChange={this.props.onChange} disabled={this.props.disabled}
        style={this.props.style} ref="select">
        {emptyOption}
        {this.props.options.map(this.renderOption.bind(this))}
      </select>
    );

    if (this.props.label) {
      return (
        <LabeledInput input={select} horizontal={this.props.horizontal}
          htmlFor={this.props.ref} label={this.props.label} inline={this.props.inline}/>
      );
    }

    return select;
  }
}

SelectInput.defaultProps = {
  disabled: false,
  emptyOption: true,
  labelAttribute: 'name',
  valueAttribute: 'id',
  onChange: () => {}
};

SelectInput.propTypes = {
  labelAttribute: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  filter: React.PropTypes.func,
  label: React.PropTypes.string,
  inline: React.PropTypes.bool,
  horizontal: React.PropTypes.bool,
  emptyOption: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  defaultValue: React.PropTypes.any,
  options: React.PropTypes.array,
  valueAttribute: React.PropTypes.string,
  ref: React.PropTypes.string,
  style: React.PropTypes.object
};
