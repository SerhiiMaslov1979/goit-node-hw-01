// contacts.js

//  Розкоментуй і запиши значення
const contactsPath = path.join(__dirname, "bd", "contacts.json");

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

// const fs = require("fs/promises");
// const path = require("path");

// async function listContacts() {
//   try {
//     const data = await fs.readFile(contactsPath, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     return [];
//   }
// }

// async function getContactById(contactId) {
//   try {
//     const contacts = await listContacts();
//     return contacts.find((contact) => contact.id === contactId) || null;
//   } catch (error) {
//     return null;
//   }
// }

// async function removeContact(contactId) {
//   try {
//     const contacts = await listContacts();
//     const removedContact = contacts.find((contact) => contact.id === contactId);
//     if (!removedContact) return null;

//     const updatedContacts = contacts.filter(
//       (contact) => contact.id !== contactId
//     );
//     await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));

//     return removedContact;
//   } catch (error) {
//     return null;
//   }
// }

// async function addContact(name, email, phone) {
//   try {
//     const contacts = await listContacts();
//     const newContact = { id: Date.now(), name, email, phone };
//     contacts.push(newContact);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts));

//     return newContact;
//   } catch (error) {
//     return null;
//   }
// }

// module.exports = { listContacts, getContactById, removeContact, addContact };
