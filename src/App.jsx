import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './css/style.css';

class App extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'name1',
        surname: 'second1',
        email: 'email1@gmail.com',
        phone: '0667854179',
      },
      {
        id: 2,
        name: 'name2',
        surname: 'second2',
        email: 'email2@gmail.com',
        phone: '+380954561487',
      },
      {
        id: 3,
        name: 'name3',
        surname: 'second3',
        email: 'email3@gmail.com',
        phone: '0978546972',
      },

    ],
    selectedContact: this.getEmptyContact(),
  };

  getEmptyContact() {
    return ({
      name: '',
      surname: '',
      email: '',
      phone: '',
      id: '',
    });
  }

  addContact = () => {
    this.setState({
      selectedContact: this.getEmptyContact(),
    });
  }

  contactOnClick = (contact) => {

    this.setState({
      selectedContact: contact,
    });

  };

  onSaveContact = contact => {
    if (contact.id) {
      this.setState({
        contacts: [...this.state.contacts.map(cont => cont.id === contact.id ? contact : cont)],
        selectedContact: contact,
      });
    } else {
      contact.id = Date.now();

      this.setState({
        contacts: [...this.state.contacts, contact],
        selectedContact: contact,
      });
    }
  }

  onDeleteContact = contact => {
    this.setState({
      contacts: [...this.state.contacts.filter(cont => cont.id !== contact.id)],
      selectedContact: this.getEmptyContact(),
    });
  }

  render() {
    return (
        <div className='wrapper'>
          <div className="column-left">
            <ContactList
              contacts={this.state.contacts}
              contactOnClick={this.contactOnClick}
            />
            <div className="wrapper-button">
              <button className="add-contact"
                onClick={this.addContact}
              >
                Add contact
              </button>
            </div>
          </div>
          <div className="column-right">
            <ContactForm
                key={this.state.selectedContact.id}
                contact={this.state.selectedContact}
                onSave={this.onSaveContact}
                onDelete={this.onDeleteContact}
            />
          </div>
        </div>
    );
  }
}

export default App;
