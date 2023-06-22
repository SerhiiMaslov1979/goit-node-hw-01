// const {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// } = require("./contacts");

// listContacts()
//   .then((contacts) => console.log(contacts))
//   .catch((error) => console.error(error));

const contacts = require("./contacts");

contacts
  .listContacts()
  .then((contact) => console.log(contact))
  .catch((error) => console.error(error));
