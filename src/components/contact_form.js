import React, { Component} from 'react';
import AppActions from '../actions/app_action';
import Contact from './contact';



class ContactForm extends Component {
render() {
    return  (
    <div>

      <form onSubmit = {this.handleSubmit.bind(this)}>
      <div className = "form-group">
      <input type = "text" ref= "name" className = "form-control" placeholder = "Name" />
      </div>
      <div className = "form-group">
      <input type = "text" ref = "email" className = "form-control" placeholder = "Email" />
      </div>
      <div className = "form-group">
      <input type = "text" ref = "phone" className = "form-control" placeholder = "Number"/>
      </div>
      <button type = "submit" className = "btn btn-primary">Submit</button>
      </form>
      <ul className = "col-md-4  list-group">
      {this.props.contacts.map((contact)=> {
        return <Contact contact = {contact} key = {contact.id}/>
      })}
      </ul>
  </div>
);
};
handleSubmit(event){
  event.preventDefault();
  console.log(this.props.contacts)
   let contact = {
    name: this.refs.name.value.trim(),
    email: this.refs.email.value.trim(),
    phone: this.refs.phone.value.trim()
  }

   let response = AppActions.recieveContact(this.props.contacts);
   var start = new Date().getTime();

  console.log("Response is  "+ response);

  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > 5000){
      break;
    }
  }  this.forceUpdate();



}

}

export default ContactForm;
