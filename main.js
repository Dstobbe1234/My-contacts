// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS

let contacts = []

function displayContacts() {
  console.log('Display Contacts');
}

function addContact() {
  let name = prompt("Enter name:");
  let email = prompt("Enter email:");
  let phoneNum = prompt("Enter phone number");
  let country = prompt("Enter country");
  contacts.push(newContact(name, email, phoneNum, country))
}

// function removeContact() {
//   console.log('Remove Contact');
// }

// function displayByName() {
//   console.log('Display by Name');
// }

// function displayByCountry() {
//   console.log('Display by Country');
// }

function newContact(name, email, phoneNum, country) {
  return {
    name: name,
    email: email, 
    phoneNum: phoneNum,
    country: country,
  }
}

function save() {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}
