let AppActions = {

  //  saveContact: (contact, contacts) => {
  //console.log(contacts);
  //contacts.push(contact);

  //fetch('https://requestb.in/qsi3s2qs', {
  //mode: 'no-cors',
  //method: 'POST',
  //headers: {
  //  'Accept': 'application/json',
  //'Content-Type': 'application/json',
  //  },
  //body: JSON.stringify(contacts)

  //});
  //}

  recieveContact: (contacts) => {
    console.log(contacts);
    contacts.forEach(
      function addToContacts(value) {
        console.log("removing from contacts")
        contacts.pop();
      });
    fetch('http://www.mocky.io/v2/5a1f10172f00007942ee30f2')
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        data.forEach(
          function addToContacts(value) {
            console.log("Value is: " + JSON.stringify(value));
            contacts.push(value);
          }
        );
        console.log("API  response" + JSON.stringify(data));
        return JSON.stringify(data)
      })


  }
  }

export default AppActions;
