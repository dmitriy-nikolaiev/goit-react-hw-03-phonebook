import { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactListItem } from '../ContactListItem';

export class ContactList extends Component {
  render() {
    return (
      <ul className="contact-list">
        {this.props.contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(this.props.filter.toLowerCase().trim())
          )
          .map((contact) => {
            return (
              <ContactListItem
                key={contact.id}
                name={contact.name}
                number={contact.number}
                deleteHandler={this.props.deleteHandler(contact.id)}
              />
            );
          })}
      </ul>
    );
  }
}

ContactList.defaultProps = {
  filter: '',
};

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array.isRequired,
};
