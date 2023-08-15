import React, { useState, useEffect, createContext } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";

import ContactPopup from "./Container/Popup/ContactPopup";

export const Storage = createContext();

function App() {
  const [contactPopup, setContactPopup] = useState(false);
  const [scrollIs, setScrollIs] = useState(99);

  const ContactPopup_handler = (value) => {
    setContactPopup(value);
  };

  const scroll_handler = (value) => {
    setScrollIs(value);
  };


  return (
    <div className="App" id="App">
      <Storage.Provider
        value={{
          // Post Data
          PostContactPopup: contactPopup,
          postScrollIs: scrollIs,

          // Get Data
          GetContactPopup: ContactPopup_handler,
          getScrollIs: scroll_handler,
        }}
      >
        <Navbar />
        <HomePage />

        {contactPopup ? <ContactPopup /> : null}
      </Storage.Provider>
    </div>
  );
}

export default App;
