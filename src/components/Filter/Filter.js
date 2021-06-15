import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <label className="filter-label">
        Find contacts by name:
        <input
          className="filter-input"
          name="name"
          value={this.props.filter}
          onChange={this.props.filterHandler}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  filterHandler: PropTypes.func,
};
