// contacts.js

const fs = require("node:fs/promises");
const path = require("node:path");

//  Розкоментуй і запиши значення
const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

// TODO: задокументувати кожну функцію
async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  // ...твій код. Повертає масив контактів.
  return JSON.parse(data);
}

async function writeFile(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === id);
  return contact;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const removedContact = contacts.find((contact) => contact.id === contactId);
  if (!removedContact) return null;

  const updatedContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));

  return removedContact;

  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: Date.now(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

// const fs = require("fs/promises");
// const path = require("path");

// const contactsPath = path.join(__dirname, "db", "contacts.json");

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
