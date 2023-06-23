const fs = require("node:fs/promises");
const path = require("node:path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

async function writeFile(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const removedContact = contacts.find((contact) => contact.id === contactId);
  if (!removedContact) return null;

  const updatedContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );

  const contactsJSON = JSON.stringify(updatedContacts, null, 2);
  await fs.writeFile(contactsPath, contactsJSON);

  return removedContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(), // Генерація ідентифікатора за допомогою nanoid()
    name,
    email,
    phone,
  };
  contacts.push(newContact);

  const contactsJSON = JSON.stringify(contacts, null, 2);
  await fs.writeFile(contactsPath, contactsJSON);

  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
