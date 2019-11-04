import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

class ContactInfo extends Component {
  formGroupContacts(contacts, callback) {
    return contacts.map((contact, index) => {
      return (
          <div key={index}
               className="contact-item"
               onClick={callback.bind(null, contact)}
          >
            <span>
              {index + 1}.
            </span>
            <ContactListItem
                contact={contact}
                onSave={this.props.onSave}
                onDelete={this.props.onDelete}/>
          </div>
      )
    });
  }

  render() {
    let {contacts, contactOnClick} = this.props;

    return (
        <div className='contact-list'>
          {this.formGroupContacts(contacts, contactOnClick)}
        </div>
    );
  }
}

ContactInfo.propTypes = {
  contacts: PropTypes.array,
  contactOnClick: PropTypes.func,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ContactInfo;
