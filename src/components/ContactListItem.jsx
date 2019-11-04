import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContactListItem extends Component {
  render() {
    let {name, surname} = this.props.contact;

    return (
        <span>
          {name} {surname}
        </span>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactListItem;
