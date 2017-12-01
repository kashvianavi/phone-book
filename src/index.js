import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ContactForm from './components/contact_form';
import ContactsList from './components/contacts_list';

let contacts = [
{id: 1, name: "Cassio Zen", email: "cassiozen@gmail.com" },
{ id: 2, name: "Dan Abramov", email: "gaearon@somewhere.com" },
{ id: 3, name: "Pete Hunt", email: "floydophone@somewhere.com" },
{ id: 4, name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
{ id: 5, name: "Ryan Florence", email: "rpflorence@somewhere.com" },
{ id: 6, name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
]




class App extends Component  {

  render(){
  return (
    <div>
    <ContactForm contacts = {this.props.contacts}/>
    <ContactsList contacts = {this.props.contacts} />


  </div>
)
}
}
ReactDom.render(<App  contacts = {contacts}/>, document.querySelector('.container'));
