import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactListItem extends Component {
  render() {
    const { name, number, deleteHandler } = this.props;

    return (
      <li className="contact-list-item">
        <span className="contact-name">{name}:</span>
        <span className="contact-number"> {number}</span>
        <button className="contact-delete-btn" onClick={deleteHandler}>
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteHandler: PropTypes.func,
};
