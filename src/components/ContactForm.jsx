import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

class ContactForm extends Component {
  state = {
    name: this.props.contact.name,
    surname: this.props.contact.surname,
    email: this.props.contact.email,
    phone: this.props.contact.phone,
    id: this.props.contact.id,
  };


  changeValue = (e) => {
    let fieldName = e.target.name;
    let val = e.target.value;

    this.setState({
      [fieldName]: val,
    });

  };

  onClickSave = () => {
    this.props.onSave(this.state);
  }

  onClickDelete = () => {
    this.props.onDelete(this.props.contact);
  }

  render() {
    let {contact} = this.props;


    return (
        <div className='form-view'>
          <div className="input">
            <input name='name'
                   type="text"
                   placeholder='Your name'
                   onChange={this.changeValue}
                   value={this.state.name}/>
          </div>
          <div className="input">
            <input name='surname'
                   type="text"
                   placeholder='Your surname'
                   onChange={this.changeValue}
                   value={this.state.surname}
            />
          </div>
          <div className="input">
            <input name='email'
                   type="email"
                   placeholder='Your email'
                   onChange={this.changeValue}
                   value={this.state.email}
            />
          </div>
          <div className="input">
            <InputMask
                mask="+380999999999"
                name="phone"
                placeholder="+380_________"
                onChange={this.changeValue}
                value={this.state.phone}
            />
          </div>
          <div className="form-buttons">
            <button className="save" onClick={this.onClickSave}>
              Save
            </button>
            <button className={this.state.id ? 'delete show' : 'delete hide'}
                    onClick={this.onClickDelete} >
              Delete
            </button>
          </div>

        </div>
    );
  }
}

ContactForm.propTypes = {
  contact: PropTypes.object,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ContactForm;
