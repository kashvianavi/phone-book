import React, { Component } from 'react';
import Contact from './contact';

class ContactsList extends Component {
  render() {
  return (
    <ul className = "col-md-4  list-group">
    {this.props.contacts.map((contact)=> {
      return <Contact contact = {contact} key = {contact.id}/>
    })}
    </ul>
)
}
}
export default ContactsList;
