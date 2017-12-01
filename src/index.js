import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ContactForm from './components/contact_form';
import ContactsList from './components/contacts_list';

let contacts = [
{id: 1, name: "Cassio Zen", email: "cassiozen@gmail.com" , phone: "444-333-1111"},
{ id: 2, name: "Dan Abramov", email: "gaearon@somewhere.com", phone: "444-333-1111" },
{ id: 3, name: "Pete Hunt", email: "floydophone@somewhere.com", phone: "444-333-1111" },
{ id: 4, name: "Paul O’Shannessy", email: "zpao@somewhere.com" , phone: "444-333-1111"},
{ id: 5, name: "Ryan Florence", email: "rpflorence@somewhere.com", phone: "444-333-1111" },
{ id: 6, name: "Sebastian Markbage", email: "sebmarkbage@here.com", phone: "444-333-1111" },
]




class App extends Component  {

  render(){
  return (
    <div>
    <ContactForm contacts = {this.props.contacts}/>
    


  </div>
)
}
}
ReactDom.render(<App  contacts = {contacts}/>, document.querySelector('.container'));
