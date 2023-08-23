import React, { useState, createContext } from "react";
import "./App.scss";
import 'animate.css';
import MainPage from "./MainPage/MainPage";
import ContactPopup from "./Container/Popup/ContactPopup";
import Celebration from "./Container/Celebration/Celebration";
export const Storage = createContext();

function App() {
  // if contactPopup is true, then showing contact popup page, other then showing mainpage.
  const [contactPopup, setContactPopup] = useState(false);

  //if scrollIs is > 99, then showing navbar background color, other then showing transparent.
  const [scrollIs, setScrollIs] = useState(99);

  //if celebration is true, then showing celebrate page, other then showing mainpage.
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
        {/* for main page or celebration page */}
        {!celebrate ? <MainPage /> : <Celebration/>}

        {/* for contact popup page */}
        {contactPopup ? <ContactPopup /> : null}

      </Storage.Provider>
    </div>
  );
}

export default App;
