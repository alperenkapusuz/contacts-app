import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"Alperen",
      phone_number:"1234214344"
    },
    {
      fullname:"Sefa",
      phone_number:"1231412344"
    },
    {
      fullname:"İrfan",
      phone_number:"6543653656"
    }
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
      <Form addContact={setContacts} contacts={contacts} />
      <List contacts={contacts} />
    </div>
  );
}

export default Contacts;
