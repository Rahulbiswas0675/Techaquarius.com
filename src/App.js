import React, { useState, createContext } from "react";
import "./App.scss";
import "animate.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import ContactPopup from "./Container/Popup/ContactPopup";
import Celebration from "./Container/Celebration/Celebration";
import CareerPage from "./Pages/CareerPage";
export const Storage = createContext();
function App() {
  // if contactPopup is true, then showing contact popup page, other then showing mainpage.
  const [contactPopup, setContactPopup] = useState(false);

  //if scrollIs is > 99, then showing navbar background color, other then showing transparent.
  const [scrollIs, setScrollIs] = useState(99);

  //if celebration is true, then showing celebrate page, other then showing mainpage.
  const [celebrate, setCelebrate] = useState(true);

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
          getCelebrate: setCelebrate,
        }}
      >
      

        <Router>
          <Routes>
            {/* for Home page*/}
            <Route path="/" element={<MainPage />} />

            {/* for career at Techaquarius page */}
            <Route path="/career" element={<CareerPage />} />
          </Routes>
        </Router>

        {/* for Celebrate page*/}
        {celebrate ? <Celebration /> : null}

        {/* for contact popup page */}
        {contactPopup ? <ContactPopup /> : null}

      </Storage.Provider>
    </div>
  );
}

export default App;
