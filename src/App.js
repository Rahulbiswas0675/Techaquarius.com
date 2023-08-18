import React, { useState, createContext } from "react";
import "./App.scss";
import 'animate.css';
import MainPage from "./MainPage/MainPage";
import ContactPopup from "./Container/Popup/ContactPopup";
import Celebration from "./Container/Celebration/Celebration";
export const Storage = createContext();

function App() {
  const [contactPopup, setContactPopup] = useState(false);
  const [scrollIs, setScrollIs] = useState(99);
  const [celebrate, setCelebrate] = useState(false);


  return (
    <div className="App" id="App">
      <Storage.Provider
        value={{
          // Post Data
          PostContactPopup: contactPopup,
          postScrollIs: scrollIs,

          // Get Data
          GetContactPopup: setContactPopup,
          getScrollIs: setScrollIs,
          getCelebrate : setCelebrate,
        }}
      >
        {celebrate ? <MainPage /> : <Celebration/>}
        {contactPopup ? <ContactPopup /> : null}
      </Storage.Provider>
    </div>
  );
}

export default App;
