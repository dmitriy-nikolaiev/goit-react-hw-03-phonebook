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

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContactHandler = (newContact) => {
    if (this.state.contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    newContact.id = uuidv4();
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
        <Filter filter={this.state.filter} filterHandler={this.filterHandler} />
        <ContactList {...this.state} deleteHandler={this.deleteHandler} />
      </div>
    );
  }
}

export default App;
