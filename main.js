// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  } else if (selection === "searchByEmail") {
    searchByEmail();
  }
}

// MENU FUNCTIONS

let contacts = loadContacts();

function displayContacts() {
  outputEl.innerHTML = "";
  console.log("Display Contacts");
  for (let i = 0; i < contacts.length; i++) {
    outputEl.innerHTML += getContactStr(i);
  }
}
//hi
function addContact() {
  let name = prompt("Enter name:");
  let email = prompt("Enter email:");
  let phoneNum = prompt("Enter phone number");
  let country = prompt("Enter country");
  if(findByEmail(email) === -1) {
    contacts.push(newContact(name, email, phoneNum, country, contacts.length));
    outputEl.innerHTML = `Contact Added : ${name}`;
    save();
  } else {
    outputEl.innerHTML = "Email is already in contacts"
  }
}

function removeContact() {
  let emailSearch = prompt("Enter email");
  let index = findByEmail(emailSearch)
  if (index !== -1) {
    contacts.splice(index, 1)
    save();
    outputEl.innerHTML = "Contact deleted!"
  } else {
    outputEl.innerHTML = "Not a valid email!";
  }
}

function displayByName() {
  outputEl.innerHTML = "";
  let searchName = prompt("Enter name:");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name.includes(searchName)) {
      outputEl.innerHTML += getContactStr(i);
    }
  }
}

function displayByCountry() {
  outputEl.innerHTML = "";
  let country = prompt("Enter country");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].country === country) {
      outputEl.innerHTML += getContactStr(i);
    }
  }
}

function newContact(name, email, phoneNum, country, index) {
  return {
    name: name,
    email: email,
    phoneNum: phoneNum,
    country: country,
    index: index,
  };
}

function save() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function getContactStr(i) {
  return ` 
    <div class="contact">
      <h2 class="info">${contacts[i].index}: ${contacts[i].name}<h2>
      <hr>
      <p class="info">${contacts[i].email}<p>
      <hr>
      <p class="info">${contacts[i].phoneNum}<p>
      <hr>
      <p class="info">${contacts[i].country}<p>
    <div>
  `;
}

function findByEmail(email) {
  let emailArr = [];
  for (let i = 0; i < contacts.length; i++) {
    emailArr.push(contacts[i].email);
  }
  return emailArr.indexOf(email);
}

function searchByEmail() {
  outputEl.innerHTML = ""
  let emailSearch = prompt("Enter email:");
  let index = findByEmail(emailSearch)
  if(index !== -1) {
    outputEl.innerHTML = getContactStr(index)
  } else {
    outputEl.innerHTML = "Not a valid email"
  }
}

function loadContacts() {
  return JSON.parse(localStorage.getItem("contacts")) ?? [];
}
