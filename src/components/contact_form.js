import React, { Component} from 'react';
import AppActions from '../actions/app_action';



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

  AppActions.saveContact(contact,this.props.contacts);

}

}

export default ContactForm;
