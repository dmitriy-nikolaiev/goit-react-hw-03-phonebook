import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

import { ContactForm } from './components/ContactForm/';
import { Filter } from './components/Filter';
import { ContactList } from './components/ContactList/';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContactHandler = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    if (this.state.contacts.find((contact) => contact.name === name.value)) {
      alert(`${name.value} is already in contacts.`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name: name.value,
      number: number.value,
    };

    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  filterHandler = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  deleteHandler = (id) => () => {
    this.setState({ contacts: this.state.contacts.filter((contact) => contact.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addContactHandler={this.addContactHandler} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.filterHandler} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
