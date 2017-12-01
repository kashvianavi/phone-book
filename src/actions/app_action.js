

 let AppActions= {

   saveContact:(contact,contacts) => {
     console.log(contacts);
     contacts.push(contact);

     fetch('https://requestb.in/qsi3s2qs', {
       mode: 'no-cors',
     method: 'POST',
     headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     },
   body: JSON.stringify(contacts)

 });
}
}
/*recieveContact:(contact) => {
  console.log(contact);
  fetch('http://www.mocky.io/v2/5a1f10172f00007942ee30f2', {
    mode: 'no-cors',
  method: 'GET',
  /*headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify(contact)
});
}*/




export default AppActions;
