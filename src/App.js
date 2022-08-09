import { useState } from "react";
import "./App.css";
import contactsList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  const addRandomContact = () => {
    const ramdomContact = Math.random() * contactsList.length;
    const randomPos = Math.floor(ramdomContact);
    const contactToAdd = contactsList[randomPos];
    const arrayCopy = [...contacts];
    arrayCopy.unshift(contactToAdd);

    setContacts(arrayCopy);
  };

  const sortByPopularity = () => {
    const arrayCopy = [...contacts];
    arrayCopy.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts(arrayCopy);
  };
  const sortByName = () => {
    const arrayCopy = [...contacts];
    arrayCopy.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts(arrayCopy);
  };
  const deleteContact = (contactsId) => {
    const filterArr = contacts.filter((contact) => {
      return contact.id !== contactsId;
    });
    setContacts(filterArr);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <div>
        <table id="tableTitle">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won a Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </table>
      </div>
      {contacts.map((contact) => {
        return (
          <tr>
            <td>
              <img src={contact.pictureUrl} alt="" width="60px" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? "🏆" : ""}</td>
            <td>{contact.wonEmmy ? "⭐" : ""}</td>
            <td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </div>
  );
}

export default App;
