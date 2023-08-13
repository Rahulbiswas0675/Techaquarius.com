import React, { useState, useEffect, createContext } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";

import ContactPopup from "./Container/Popup/ContactPopup";

export const Storage = createContext();

function App() {
  const [contactPopup, setContactPopup] = useState(false);
  const [scrollIs, setScrollIs] = useState();

  


  const ContactPopup_handler = (value) => {
    setContactPopup(value);
  };

  function scroll_Is(e){
    console.log(e.target)
  }

  return (
    <div className="App" id="App" onScroll={(e) => scroll_Is(e)}>
      <Storage.Provider value={{
        // Post Data
        PostContactPopup : contactPopup,

        // Get Data
        GetContactPopup : ContactPopup_handler,
      }}>
        <Navbar />
        <HomePage />

        {contactPopup ? <ContactPopup /> : null}
      </Storage.Provider>
    </div>
  );
}

export default App;
