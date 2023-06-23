const contacts = require("./contacts");
const argv = require("yargs").argv;
const { table } = require("table");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      if (contact) {
        console.log(contact);
      } else {
        console.log("Contact not found");
      }
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log("New contact added:", newContact);
      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      if (deletedContact) {
        console.log("Contact deleted:", deletedContact);
      } else {
        console.log("Contact not found");
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
